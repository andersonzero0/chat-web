import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ChatMessageComponent } from '../chat-message/chat-message.component';
import { SharedModule } from '../../shared/shared.component';
import { mockMessages } from './mockData';

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
  imports: [SharedModule , ChatMessageComponent],
  templateUrl: './chat-content.component.html',
})
export class ChatContentComponent implements AfterViewInit {
  @ViewChild('messagesContainer') messagesContainer!: ElementRef;
  
  messages: Message[] = mockMessages;
  imageSelected: File | null = null;
  imageSelectedUrl: string | null = null;

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    const container = this.messagesContainer.nativeElement;
    container.scrollTop = container.scrollHeight;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.imageSelected = input.files[0];
      this.imageSelectedUrl = URL.createObjectURL(this.imageSelected);
    }
  }

  onCloseFile() {
    this.imageSelected = null;
    this.imageSelectedUrl = null;
  }
}
