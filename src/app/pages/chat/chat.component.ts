import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatSidebarComponent } from '../../components/chat-sidebar/chat-sidebar.component';
import { ChatContentComponent } from '../../components/chat-content/chat-content.component';
import { WebsocketService } from '../../services/chat/websocket.service';
import { Message } from '../../services/chat/chat.interface';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [ChatSidebarComponent, ChatContentComponent],
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {
  @ViewChild(ChatContentComponent) chatContent!: ChatContentComponent;
  @ViewChild(ChatSidebarComponent) chatSidebar!: ChatSidebarComponent;

  constructor(
    private webSocket: WebsocketService,
    private userService: UsersService,
  ) {}

  openChatId: string | null = null;

  ngOnInit(): void {
    this.webSocket.socket.on('private-message', (data: Message) => {
      if (
        this.openChatId ===
        (data.sender_id === this.userService.getId()
          ? data.receiver_id
          : data.sender_id)
      ) {
        this.chatContent.addNewMessage(data);
      }
      this.chatSidebar.updateChatList(data);
    });
  }

  onChatSelected(chatId: string): void {
    this.openChatId = chatId;
  }
}
