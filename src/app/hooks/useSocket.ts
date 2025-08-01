// src/app/hooks/useSocket.ts
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Socket } from 'socket.io-client';
import io from 'socket.io-client';


interface OrderItem {
  id: string;
  itemId: number;
  name: string;
  price: number;
  quantity: number;
  extras: Array<{
    name: string;
    price: number;
  }>;
  extrasTotal: number;
  Description: string;
}

export interface OrderData {
  _id: string;
  id?: string;
  orderType: string;
  dataTypeOrder: string;
  cart: OrderItem[];
  comments: string;
  companiesName: string;
  companiesID: string;
  email: string;
  fullname: string;
  phone: string;
  whathsapp: string;
  channel: string;
  name: string;
  status?: "pending" | "processing" | "paused" | "finished" | "cancelled" | "delivered";
  createdAt?: string;
  updatedAt?: string;
  timestamp?: string;
}

interface Message {
  name: string;
  message: string;
  isOrder: boolean;
  orderData?: OrderData;
  timestamp: string;
}

interface UseSocketChatReturn {
  name: string;
  setName: (name: string) => void;
  room: string;
  setRoom: (room: string) => void;
  message: string;
  setMessage: (message: string) => void;
  messages: Message[];
  joinRoom: (room: string) => void;
  sendMessage: () => void;
  sendOrder: (orderDetails: OrderData, roomsname?: string) => void;
  parsedMessages: OrderData[];
  isConnected: boolean;
  reconnectAttempts: number;
}

const useSocket = (socketUrl: string): UseSocketChatReturn => {
  const socketRef = useRef<any | null>(null);
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [reconnectAttempts, setReconnectAttempts] = useState(0);
  
  const maxReconnectAttempts = 30;
  const reconnectDelay = 5000;
  const currentRoom = useRef('');

  const deepParseJson = useCallback((str: string): any => {
    try {
      let parsed = JSON.parse(str);
      while (typeof parsed === 'string') {
        try {
          parsed = JSON.parse(parsed);
        } catch {
          break;
        }
      }
      return parsed;
    } catch (e) {
      return str;
    }
  }, []);

  const processIncomingMessage = useCallback((data: { from: string; message: string }): Message => {
    try {
      const parsed = typeof data.message === 'string' ? deepParseJson(data.message) : data.message;

      if (parsed && typeof parsed === 'object' && (parsed._id || parsed.id)) {
        const orderData: OrderData = {
          ...parsed,
          _id: parsed._id || parsed.id || `generated-${Date.now()}`,
          status: parsed.status || 'pending',
          timestamp: parsed.timestamp || new Date().toISOString()
        };

        return {
          name: data.from,
          message: `Orden recibida (ID: ${orderData._id})`,
          isOrder: true,
          orderData,
          timestamp: new Date().toISOString()
        };
      }

      return {
        name: data.from,
        message: typeof parsed === 'string' ? parsed : JSON.stringify(parsed),
        isOrder: false,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('Error processing message:', error);
      return {
        name: data.from,
        message: data.message,
        isOrder: false,
        timestamp: new Date().toISOString()
      };
    }
  }, [deepParseJson]);

  const initializeSocket = useCallback(() => {
    if (typeof window === 'undefined') return;

    if (socketRef.current?.connected) return socketRef.current;

    const newSocket = io(socketUrl, {
      transports: ['websocket'],
      reconnection: true,
      reconnectionAttempts: maxReconnectAttempts,
      reconnectionDelay: reconnectDelay,
      autoConnect: true,
      forceNew: false
    });

    newSocket.on('connect', () => {
      setIsConnected(true);
      setReconnectAttempts(0);
      console.log('Socket connected:', newSocket.id);
      
      if (currentRoom.current) {
        newSocket.emit('join_channel', currentRoom.current);
      }
    });

    newSocket.on('disconnect', (reason: string) => {
      setIsConnected(false);
      console.log('Socket disconnected:', reason);

      if (reason === 'io server disconnect') {
        setTimeout(() => {
          if (reconnectAttempts < maxReconnectAttempts) {
            console.log(`Reconnecting attempt ${reconnectAttempts + 1}/${maxReconnectAttempts}`);
            newSocket.connect();
            setReconnectAttempts(prev => prev + 1);
          }
        }, reconnectDelay);
      }
    });

    newSocket.on('connect_error', (err: Error) => {
      console.error('Socket connection error:', err.message);
    });

    newSocket.on('new_message', (data: { from: string; message: string }) => {
      console.debug('New message received:', data);
      const newMessage = processIncomingMessage(data);
      setMessages(prev => [...prev, newMessage]);
    });

    newSocket.on('order_updated', (order: OrderData) => {
      console.debug('Order update received:', order);
      const newMessage = {
        name: order.name || 'System',
        message: `Orden actualizada (ID: ${order._id})`,
        isOrder: true,
        orderData: order,
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, newMessage]);
    });

    newSocket.on('joined_channel', (channel: string) => {
      console.log(`Joined channel: ${channel}`);
      currentRoom.current = channel;
    });

    newSocket.on('left_channel', (channel: string) => {
      console.log(`Left channel: ${channel}`);
      if (currentRoom.current === channel) {
        currentRoom.current = '';
      }
    });

    socketRef.current = newSocket;
    return newSocket;
  }, [socketUrl, processIncomingMessage, reconnectAttempts]);

  useEffect(() => {
    const newSocket = initializeSocket();
    return () => {
      if (newSocket) {
        if (currentRoom.current) {
          newSocket.emit('leave_channel', currentRoom.current);
        }
        newSocket.disconnect();
        socketRef.current = null;
      }
    };
  }, [initializeSocket]);

  const joinRoom = useCallback((roomName: string) => {
    if (!socketRef.current) return;

    const targetRoom = roomName;
    if (!targetRoom) return;

    if (currentRoom.current && currentRoom.current !== targetRoom) {
      socketRef.current.emit('leave_channel', currentRoom.current);
    }

    socketRef.current.emit('join_channel', targetRoom);
    currentRoom.current = targetRoom;
    setRoom(targetRoom);
  }, []);

  const sendMessage = useCallback(() => {
    if (!message.trim() || !socketRef.current || !currentRoom.current) return;

    socketRef.current.emit('send_message', {
      channel: currentRoom.current,
      name,
      message,
    }, (ack: { success: boolean }) => {
      if (!ack?.success) {
        console.error('Failed to send message');
      }
    });

    setMessage('');
  }, [message, name]);

  const sendOrder = useCallback((orderDetails: OrderData, roomsname?: string) => {
    if (!socketRef.current) return;

    const targetRoom = roomsname || currentRoom.current || room;
    if (!targetRoom) return;

    const orderWithMetadata: OrderData = {
      ...orderDetails,
      channel: targetRoom,
      name: name || 'System',
      timestamp: new Date().toISOString(),
    };

    console.debug('Sending order update:', orderWithMetadata);

    socketRef.current.emit('send_message', {
      channel: targetRoom,
      name: name || 'System',
      message: JSON.stringify(orderWithMetadata),
    }, (ack: { success: boolean }) => {
      if (ack?.success) {
        setMessages(prev => [...prev, {
          name: name || 'System',
          message: `Orden actualizada (ID: ${orderDetails._id})`,
          isOrder: true,
          orderData: orderWithMetadata,
          timestamp: new Date().toISOString()
        }]);
      } else {
        console.error('Failed to send order update');
      }
    });
  }, [room, name]);

  const parsedMessages = useMemo(() => {
    return messages
      .filter(msg => msg.isOrder && msg.orderData)
      .map(msg => {
        const orderData = msg.orderData!;
        return {
          ...orderData,
          _id: orderData._id || orderData.id || `generated-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          timestamp: msg.timestamp
        };
      });
  }, [messages]);

  return {
    name,
    setName,
    room,
    setRoom,
    message,
    setMessage,
    messages,
    joinRoom,
    sendMessage,
    sendOrder,
    parsedMessages,
    isConnected,
    reconnectAttempts
  };
};

export default useSocket;