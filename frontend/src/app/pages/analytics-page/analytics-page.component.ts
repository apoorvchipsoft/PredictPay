import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, BarChart3 } from 'lucide-angular';

@Component({
  selector: 'app-analytics-page',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="space-y-8">
      <div>
        <h1>Analytics</h1>
        <p class="text-muted-foreground mt-1">Revenue trends and business insights</p>
      </div>
      
      <div class="bg-card rounded-lg border border-border p-12 text-center">
        <lucide-icon [img]="barChart3Icon" class="w-16 h-16 text-muted-foreground mx-auto mb-4"></lucide-icon>
        <h3>Analytics Dashboard</h3>
        <p class="text-muted-foreground">Advanced analytics and reporting coming soon</p>
      </div>
    </div>
  `
})
export class AnalyticsPageComponent {
  barChart3Icon = BarChart3;
}