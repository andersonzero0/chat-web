import { Component } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { SharedModule } from "app/shared/shared.component";

@Component({
  selector: "app-welcome",
  standalone: true,
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./welcome.component.html",
})
export class WelcomeComponent {
  authForm = new FormGroup({
    id: new FormControl("", {
      validators: [
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.required,
        Validators.pattern(/^[0-9]*$/),
      ],
    },),
  })

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
  }
}
