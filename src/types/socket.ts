// types/socket.ts
export interface Message {
    from: string;
    message: string;
    timestamp: string;
    messageId: string;
  }
  
  export interface ChannelNotification {
    type: 'join' | 'leave';
    user: string;
    channel: string;
  }
  
  export interface SocketConfig {
    serverUrl: string;
    options?: {
      autoConnect?: boolean;
      reconnection?: boolean;
      reconnectionAttempts?: number;
      reconnectionDelay?: number;
      timeout?: number;
      auth?: {
        token?: string;
      };
      [key: string]: any;
    };
  }
  
  export interface SocketEventHandlers {
    onConnected?: (socketId: string) => void;
    onDisconnected?: (socketId: string, reason: string) => void;
    onError?: (error: Error) => void;
    onMessageReceived?: (message: Message) => void;
    onChannelNotification?: (notification: ChannelNotification) => void;
    onChannelHistory?: (messages: Message[]) => void;
    onUserConnected?: (socketId: string) => void;
    onUserDisconnected?: (data: { id: string; reason: string }) => void;
  }
  
  export interface SendMessageOptions {
    channel: string;
    name: string;
    message: string;
    messageId?: string;
  }
  
  export interface JoinChannelOptions {
    channel: string;
  }