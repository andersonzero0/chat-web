import { Component, Input } from '@angular/core';
import { Message } from '../chat-content/chat-content.component';

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [],
  templateUrl: './chat-message.component.html',
})
export class ChatMessageComponent {
  @Input() isMy!: boolean;
  @Input() message!: Message;
}
