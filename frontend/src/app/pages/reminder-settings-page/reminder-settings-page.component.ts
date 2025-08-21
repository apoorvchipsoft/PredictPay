import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Bell } from 'lucide-angular';

@Component({
  selector: 'app-reminder-settings-page',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="space-y-8">
      <div>
        <h1>Reminder Settings</h1>
        <p class="text-muted-foreground mt-1">Configure automated payment reminders and notifications</p>
      </div>
      
      <div class="bg-card rounded-lg border border-border p-12 text-center">
        <lucide-icon [img]="bellIcon" class="w-16 h-16 text-muted-foreground mx-auto mb-4"></lucide-icon>
        <h3>Reminder Configuration</h3>
        <p class="text-muted-foreground">Automated reminder system coming soon</p>
      </div>
    </div>
  `
})
export class ReminderSettingsPageComponent {
  bellIcon = Bell;
}