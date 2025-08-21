import { Component, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { LucideAngularModule, Building2 } from "lucide-angular";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: "./login.component.html",
})
export class LoginComponent {
  @Output() login = new EventEmitter<void>();

  building2Icon = Building2;
  email = "demo@receivablesflow.com";
  password = "demo123";

  handleSubmit() {
    // For demo purposes, always allow login
    this.login.emit();
  }
}
