import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.component';

@Component({
  selector: 'app-new-chat',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './new-chat.component.html',
})
export class NewChatComponent {

}
