import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedModule } from '../../shared/shared.component';
import { NewChatComponent } from '../new-chat/new-chat.component';
import { UsersService } from '../../services/users/users.service';
import {
  ChatList,
  ChatListItem,
  Message,
} from '../../services/chat/chat.interface';
import { ChatService } from '../../services/chat/chat.service';
import { formattedDate } from '../../../utils/date';

@Component({
  selector: 'app-chat-sidebar',
  standalone: true,
  imports: [SharedModule, NewChatComponent],
  templateUrl: './chat-sidebar.component.html',
})
export class ChatSidebarComponent implements OnInit {
  @Input() chatId: string | null = null;
  @Output() chatSelected = new EventEmitter<string>();
  @Output() onOpenSidebar = new EventEmitter<void>();
  @Input() openSidebar!: boolean;

  constructor(
    private usersService: UsersService,
    private chatService: ChatService,
  ) {}

  formattedDate = formattedDate;

  loading = true;

  chatList: ChatList = [];

  ngOnInit(): void {
    this.getChatList();
  }

  selectChat(chatId: string): void {
    if (this.chatList.length > 0) {
      this.chatList.forEach((chat) => {
        if (chat.id === chatId) {
          chat.unread_messages_count = 0;
        }
      });
    }
    this.onOpenSidebar.emit();
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

  createNewChat(id: string): void {
    if (this.chatList.find((chat) => chat.id === id)) {
      return;
    }

    if (id === this.getMyId()) {
      return;
    }

    this.chatList.unshift({
      id,
      unread_messages_count: 0,
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
      if (
        message.sender_id != this.getMyId() &&
        this.chatId !== message.sender_id
      ) {
        this.chatList[chatId].unread_messages_count++;
      }
    }

    this.chatList.sort((a, b) => {
      if (!a.last_message || !b.last_message) {
        return 0;
      }

      const aDate = new Date(a.last_message.created_at);
      const bDate = new Date(b.last_message.created_at);
      return bDate.getTime() - aDate.getTime();
    });
  }

  logout(): void {
    this.usersService.logout();
  }

  getMyId(): string {
    return this.usersService.getId();
  }
}
