import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LucideAngularModule, MessageCircle } from "lucide-angular";

@Component({
  selector: "app-auto-messages-page",
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: "./auto-messages-page.component.html",
})
export class AutoMessagesPageComponent {
  messageCircleIcon = MessageCircle;
}
