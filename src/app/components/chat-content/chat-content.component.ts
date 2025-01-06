import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { ChatMessageComponent } from '../chat-message/chat-message.component';
import { SharedModule } from '../../shared/shared.component';
import { Message } from '../../services/chat/chat.interface';
import { ChatService } from '../../services/chat/chat.service';

@Component({
  selector: 'app-chat-content',
  standalone: true,
  imports: [SharedModule, ChatMessageComponent],
  templateUrl: './chat-content.component.html',
})
export class ChatContentComponent implements AfterViewInit {
  private _chatId: string | null = null;

  constructor(private chatService: ChatService) {}

  @Input()
  set chatId(value: string | null) {
    this._chatId = value;
    this.onChatIdChange();
  }

  get chatId(): string | null {
    return this._chatId;
  }

  onChatIdChange(): void {
    if (this.chatId) {
      this.chatService.getPrivateMessages(this.chatId).subscribe({
        next: (messages: Message[]) => {
          this.messages = messages;
          this.scrollToBottom();
        },
      });
    }
  }

  @ViewChild('messagesContainer') messagesContainer!: ElementRef;

  messages: Message[] = [];
  imageSelected: File | null = null;
  imageSelectedUrl: string | null = null;

  ngAfterViewInit() {
    if (this.chatId) {
      this.scrollToBottom();
    }
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
