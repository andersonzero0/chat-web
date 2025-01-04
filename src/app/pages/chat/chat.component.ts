import { Component } from '@angular/core';
import { ChatSidebarComponent } from '../../components/chat-sidebar/chat-sidebar.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [ChatSidebarComponent],
  templateUrl: './chat.component.html',
})
export class ChatComponent {

}
