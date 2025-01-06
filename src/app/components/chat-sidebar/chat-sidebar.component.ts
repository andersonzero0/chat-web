import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { SharedModule } from '../../shared/shared.component';
import { NewChatComponent } from '../new-chat/new-chat.component';
import { UsersService } from '../../services/users/users.service';
import { ChatList } from '../../services/chat/chat.interface';
import { ChatService } from '../../services/chat/chat.service';

@Component({
  selector: 'app-chat-sidebar',
  standalone: true,
  imports: [SharedModule, NewChatComponent],
  templateUrl: './chat-sidebar.component.html',
})
export class ChatSidebarComponent implements OnInit {
  @Input() chatId: string | null = null;
  @Output() chatSelected = new EventEmitter<string>();

  constructor(
    private usersService: UsersService,
    private chatService: ChatService,
  ) {}

  loading = true;

  chatList: ChatList | null = null;

  ngOnInit(): void {
    this.getChatList();
  }

  selectChat(chatId: string): void {
    this.chatSelected.emit(chatId);
  }

  getChatList(): void {
    this.loading = true;
    this.chatService.getChatList().subscribe({
      next: (chatList: ChatList) => {
        this.chatList = chatList;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  logout(): void {
    this.usersService.logout();
  }

  getMyId(): string {
    return this.usersService.getId();
  }
}
