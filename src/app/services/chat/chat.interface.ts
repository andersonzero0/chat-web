export interface Message {
  id: string;
  sender_id: string;
  receiver_id: string;
  message: {
    type: 'text' | 'photo';
    content: string;
  };
  ref_message?: {
    id: string;
    url: string;
    content: string;
  };
  read: boolean;
  created_at: string;
  updated_at: string;
}

export interface CreateMessage {
  receiver_id: string;
  message: {
    type: 'text' | 'photo';
    content?: string;
  };
  ref_message?: {
    id: string;
    url: string;
    content: string;
  };
}

export interface ChatListItem {
  id: string;
  unread_messages_count: number;
  last_message?: Pick<
    Message,
    'id' | 'message' | 'created_at' | 'sender_id' | 'receiver_id'
  >;
}

export type ChatList = ChatListItem[];
