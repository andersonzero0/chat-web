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
import {
  ChatList,
  ChatListItem,
  Message,
} from '../../services/chat/chat.interface';
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

  chatList: ChatList = [];

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

  updateChatList(message: Message): void {
    const chatId = this.chatList.findIndex(
      (chat) =>
        chat.id ===
        (message.sender_id == this.getMyId()
          ? message.receiver_id
          : message.sender_id),
    );

    if (chatId == null || chatId === -1) {
      const newChatListItem: ChatListItem = {
        id:
          message.sender_id == this.getMyId()
            ? message.receiver_id
            : message.sender_id,
        unread_messages_count: 1,
        last_message: message,
      };

      this.chatList.unshift(newChatListItem);
    } else {
      this.chatList[chatId].last_message = message;
    }
  }

  logout(): void {
    this.usersService.logout();
  }

  getMyId(): string {
    return this.usersService.getId();
  }
}
