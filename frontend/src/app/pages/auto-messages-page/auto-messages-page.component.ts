import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MessageCircle } from 'lucide-angular';

@Component({
  selector: 'app-auto-messages-page',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="space-y-8">
      <div>
        <h1>Auto Messages</h1>
        <p class="text-muted-foreground mt-1">Automated payment reminders and customer communications</p>
      </div>
      
      <div class="bg-card rounded-lg border border-border p-12 text-center">
        <lucide-icon [img]="messageCircleIcon" class="w-16 h-16 text-muted-foreground mx-auto mb-4"></lucide-icon>
        <h3>Automated Messaging</h3>
        <p class="text-muted-foreground">Smart communication automation coming soon</p>
      </div>
    </div>
  `
})
export class AutoMessagesPageComponent {
  messageCircleIcon = MessageCircle;
}