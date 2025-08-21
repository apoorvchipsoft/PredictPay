import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LucideAngularModule, MessageCircle } from "lucide-angular";

@Component({
  selector: "app-chatbot-page",
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: "./chatbot-page.component.html",
})
export class ChatbotPageComponent {
  messageCircleIcon = MessageCircle;
}
