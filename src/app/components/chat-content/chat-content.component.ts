import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ChatMessageComponent } from '../chat-message/chat-message.component';

export type Message = {
  id: number;
  message: {
    type: 'text' | 'photo';
    content: string;
  }
  sender_id: number;
  created_at: string;
};

@Component({
  selector: 'app-chat-content',
  standalone: true,
  imports: [ChatMessageComponent],
  templateUrl: './chat-content.component.html',
})
export class ChatContentComponent implements AfterViewInit {
  @ViewChild('messagesContainer') messagesContainer!: ElementRef;
  
  messages: Message[] = [
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

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    const container = this.messagesContainer.nativeElement;
    container.scrollTop = container.scrollHeight;
  }
}
