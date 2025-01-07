import { Component, Input } from '@angular/core';
import { Message } from '../../services/chat/chat.interface';
import { formattedDate } from '../../../utils/date';
import { SharedModule } from '../../shared/shared.component';

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './chat-message.component.html',
})
export class ChatMessageComponent {
  @Input() isMy!: boolean;
  @Input() message!: Message;

  formattedDate = formattedDate;
}
