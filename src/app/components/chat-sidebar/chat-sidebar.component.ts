import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.component';
import { NewChatComponent } from '../new-chat/new-chat.component';

export type User = {
  id: number;
  name: string;
  lastMessage: string;
}

@Component({
  selector: 'app-chat-sidebar',
  standalone: true,
  imports: [SharedModule, NewChatComponent],
  templateUrl: './chat-sidebar.component.html',
})
export class ChatSidebarComponent {
  users: User[] = [
    { id: 1, name: 'John Doe', lastMessage: 'Hello, how are you?' },
    { id: 2, name: 'Jane Doe', lastMessage: 'I am fine, thank you.' },
    { id: 3, name: 'Alice', lastMessage: 'Hey, what are you doing?' },
    { id: 4, name: 'Bob', lastMessage: 'Nothing much, just chilling.' },
    { id: 5, name: 'Eve', lastMessage: 'I am bored, let\'s go out.' },
    { id: 6, name: 'Mallory', lastMessage: 'Sure, where do you want to go?' },
  ];
}
