import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.component';

@Component({
  selector: 'app-chat-sidebar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './chat-sidebar.component.html',
})
export class ChatSidebarComponent {

}
