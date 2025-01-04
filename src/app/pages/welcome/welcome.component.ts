import { Component } from "@angular/core";
import { SharedModule } from "app/shared/shared.component";

@Component({
  selector: "app-welcome",
  standalone: true,
  imports: [SharedModule],
  templateUrl: "./welcome.component.html",
})
export class WelcomeComponent {}
