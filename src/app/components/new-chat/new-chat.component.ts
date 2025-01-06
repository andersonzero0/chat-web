import { Component, EventEmitter, Output, viewChild } from '@angular/core';
import { SharedModule } from '../../shared/shared.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BrnDialogComponent } from '@spartan-ng/brain/dialog';

@Component({
  selector: 'app-new-chat',
  standalone: true,
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
  templateUrl: './new-chat.component.html',
})
export class NewChatComponent {
  @Output() createNewChat = new EventEmitter<string>();

  public viewchildDialogRef = viewChild(BrnDialogComponent);

  newChatForm = new FormGroup({
    id: new FormControl('', {
      validators: [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(8),
      ],
    }),
  });

  onChatCreate(): void {
    if (this.newChatForm.invalid) {
      return;
    }

    this.createNewChat.emit(this.newChatForm.value.id as string);

    this.closeDialog();
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
  }

  closeDialog(): void {
    this.viewchildDialogRef()?.close({});
  }
}
