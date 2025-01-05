import { Message } from './chat-content.component';
export const mockMessages: Message[] = [
  {
    id: 1,
    message: {
      type: 'text',
      content: 'Hello',
    },
    sender_id: 1,
    created_at: '01/01/2021',
  },
  {
    id: 2,
    message: {
      type: 'text',
      content: 'Hi',
    },
    sender_id: 2,
    created_at: '01/01/2021',
  },
  {
    id: 3,
    message: {
      type: 'photo',
      content: 'https://picsum.photos/200/300',
    },
    sender_id: 1,
    created_at: '01/01/2021',
  },
  {
    id: 4,
    message: {
      type: 'text',
      content: 'How about you?',
    },
    sender_id: 2,
    created_at: '01/01/2021',
  },
  {
    id: 5,
    message: {
      type: 'photo',
      content: 'https://picsum.photos/200/301',
    },
    sender_id: 2,
    created_at: '01/01/2021',
  },
  {
    id: 6,
    message: {
      type: 'text',
      content: 'How about you?',
    },
    sender_id: 1,
    created_at: '01/01/2021',
  },
  {
    id: 7,
    message: {
      type: 'photo',
      content: 'https://picsum.photos/200/302',
    },
    sender_id: 1,
    created_at: '01/01/2021',
  }
]