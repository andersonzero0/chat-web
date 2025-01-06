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
import { UsersService } from '../../services/users/users.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-chat-content',
  standalone: true,
  imports: [
    SharedModule,
    ChatMessageComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './chat-content.component.html',
})
export class ChatContentComponent implements AfterViewInit {
  private _chatId: string | null = null;

  constructor(
    private chatService: ChatService,
    private usersService: UsersService,
  ) {}

  @Input()
  set chatId(value: string | null) {
    this._chatId = value;
    this.onChatIdChange();
  }

  messageForm = new FormGroup({
    message: new FormControl('', { validators: [Validators.required] }),
  });

  get chatId(): string | null {
    return this._chatId;
  }

  onChatIdChange(): void {
    if (this.chatId) {
      this.chatService.getPrivateMessages(this.chatId, true).subscribe({
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

  onSendMessage(): void {
    console.log(this.messageForm);

    if (this.messageForm.invalid && !this.imageSelected) {
      return;
    }

    if (this.chatId) {
      this.chatService
        .sendMessage(
          {
            message: {
              type: this.imageSelected ? 'photo' : 'text',
              content: this.imageSelected
                ? undefined
                : (this.messageForm.value.message as string),
            },
            receiver_id: this.chatId,
          },
          this.imageSelected ? this.imageSelected : null,
        )
        .subscribe({
          next: (message) => {
            this.messageForm.reset();
            this.messageForm.setErrors(null);
            this.imageSelected = null;
            this.imageSelectedUrl = null;
          },
        });
    }
  }

  getMyId(): string {
    return this.usersService.getId();
  }

  addNewMessage(message: Message): void {
    this.messages.unshift(message);
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
