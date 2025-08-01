// src/components/ChatComponent.tsx
import React, { useState, useEffect } from 'react';
import useSocket, { OrderData } from '@/app/hooks/useSocket';

const ChatComponent: React.FC = () => {
  const [inputRoom, setInputRoom] = useState('');
  const [inputName, setInputName] = useState('');
  const {
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
  } = useSocket('https://socketserver-t4g9.onrender.com');

  useEffect(() => {
    console.log(`Connection status: ${isConnected ? 'Connected' : 'Disconnected'}`);
    console.log(`Reconnect attempts: ${reconnectAttempts}`);
  }, [isConnected, reconnectAttempts]);

  const handleSendTestOrder = () => {
    const testOrder: OrderData = {
      _id: `order-${Date.now()}`,
      orderType: 'delivery',
      dataTypeOrder: 'complete',
      cart: [
        {
          id: `item-${Date.now()}`,
          itemId: 1,
          name: 'Pizza Margarita',
          price: 10.99,
          quantity: 2,
          extras: [{ name: 'Extra cheese', price: 1.5 }],
          extrasTotal: 1.5,
          Description: 'Sin cebolla'
        }
      ],
      comments: 'Llamar antes de llegar',
      companiesName: 'Test Company',
      companiesID: 'comp-123',
      email: 'test@example.com',
      fullname: 'John Doe',
      phone: '1234567890',
      whathsapp: '1234567890',
      channel: room,
      name: name || 'Test User',
      status: 'pending',
      timestamp: new Date().toISOString()
    };
    sendOrder(testOrder);
  };

  const handleJoinRoom = () => {
    if (inputRoom.trim()) {
      joinRoom(inputRoom);
    }
  };

  const handleSetName = () => {
    if (inputName.trim()) {
      setName(inputName);
    }
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      sendMessage();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="p-5 font-sans max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Chat con Socket.IO</h1>
      
      <div className={`mb-5 p-3 rounded ${isConnected ? 'bg-green-100' : 'bg-red-100'}`}>
        <p>Estado: <span className="font-semibold">{isConnected ? 'Conectado' : 'Desconectado'}</span></p>
        <p>Intentos de reconexión: <span className="font-semibold">{reconnectAttempts}</span></p>
      </div>

      <div className="mb-6 bg-gray-50 p-4 rounded">
        <h2 className="text-xl font-semibold mb-3">Configuración</h2>
        <div className="mb-3 flex items-center">
          <label className="mr-2 font-medium">Nombre:</label>
          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            className="border p-2 rounded flex-grow max-w-xs"
            placeholder="Tu nombre"
          />
          <button
            onClick={handleSetName}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Establecer
          </button>
        </div>
        <div className="flex items-center">
          <label className="mr-2 font-medium">Sala:</label>
          <input
            type="text"
            value={inputRoom}
            onChange={(e) => setInputRoom(e.target.value)}
            className="border p-2 rounded flex-grow max-w-xs"
            placeholder="Nombre de la sala"
          />
          <button
            onClick={handleJoinRoom}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Unirse
          </button>
        </div>
      </div>

      <div className="mb-6 bg-gray-50 p-4 rounded">
        <h2 className="text-xl font-semibold mb-3">Chat</h2>
        <div className="mb-3 flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe un mensaje..."
            className="border p-2 rounded flex-grow mr-2"
          />
          <button
            onClick={handleSendMessage}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Enviar
          </button>
          <button
            onClick={handleSendTestOrder}
            className="ml-2 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Orden Test
          </button>
        </div>
        <div className="border rounded p-3 h-64 overflow-y-auto bg-white">
          {messages.length === 0 ? (
            <p className="text-gray-500">No hay mensajes aún</p>
          ) : (
            messages.map((msg, index) => (
              <div key={index} className="mb-2 pb-2 border-b last:border-b-0">
                <p>
                  <span className="font-bold text-blue-600">{msg.name}:</span> {msg.message}
                </p>
                {msg.isOrder && (
                  <div className="ml-4 mt-1 text-sm text-green-700">
                    <p>Orden ID: {msg.orderData?._id}</p>
                    <p>Estado: {msg.orderData?.status}</p>
                  </div>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </p>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded">
        <h2 className="text-xl font-semibold mb-3">Órdenes Recibidas</h2>
        <div className="border rounded p-3 h-64 overflow-y-auto bg-white">
          {parsedMessages.length === 0 ? (
            <p className="text-gray-500">No hay órdenes recibidas</p>
          ) : (
            parsedMessages.map((order, index) => (
              <div key={index} className="mb-3 pb-3 border-b last:border-b-0">
                <p><span className="font-bold">ID:</span> {order._id}</p>
                <p><span className="font-bold">Cliente:</span> {order.fullname}</p>
                <p><span className="font-bold">Estado:</span> <span className="capitalize">{order.status}</span></p>
                <p><span className="font-bold">Total items:</span> {order.cart.length}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(order.timestamp || '').toLocaleString()}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;