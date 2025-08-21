import { Component, Output, EventEmitter, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { LucideAngularModule, Building2 } from "lucide-angular";

@Component({
  selector: "app-login-page",
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: "./login-page.component.html",
})
export class LoginPageComponent {
  @Output() login = new EventEmitter<void>();

  building2Icon = Building2;
  email = signal("demo@receivablesflow.com");
  password = signal("demo123");

  handleSubmit() {
    // For demo purposes, always allow login
    this.login.emit();
  }
}
