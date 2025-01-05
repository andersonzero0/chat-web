import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.component';

export type User = {
  id: number;
  name: string;
  lastMessage: string;
}

@Component({
  selector: 'app-chat-sidebar',
  standalone: true,
  imports: [SharedModule],
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
    { id: 7, name: 'Charlie', lastMessage: 'I am in, let\'s go to the beach.' },
    { id: 8, name: 'David', lastMessage: 'I am busy, maybe next time.' },
    { id: 9, name: 'Frank', lastMessage: 'I am in, let\'s go to the park.' },
    { id: 10, name: 'Grace', lastMessage: 'I am busy, maybe next time.' },
    { id: 11, name: 'Helen', lastMessage: 'I am in, let\'s go to the park.' },
    { id: 12, name: 'Ivy', lastMessage: 'I am busy, maybe next time.' },
    { id: 13, name: 'Jack', lastMessage: 'I am in, lets go to the park.' },
    { id: 14, name: 'Kelly', lastMessage: 'I am busy, maybe next time.' },
  ];
}
