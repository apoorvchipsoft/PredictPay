import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MessageCircle } from 'lucide-angular';

@Component({
  selector: 'app-chatbot-page',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="space-y-8">
      <div>
        <h1>AI Assistant</h1>
        <p class="text-muted-foreground mt-1">Your intelligent finance companion</p>
      </div>
      
      <div class="bg-card rounded-lg border border-border p-12 text-center">
        <lucide-icon [img]="messageCircleIcon" class="w-16 h-16 text-muted-foreground mx-auto mb-4"></lucide-icon>
        <h3>AI Assistant</h3>
        <p class="text-muted-foreground">Conversational AI for finance management coming soon</p>
      </div>
    </div>
  `
})
export class ChatbotPageComponent {
  messageCircleIcon = MessageCircle;
}