import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-kpi-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="bg-card rounded-lg border border-border p-6 shadow-sm">
      <div class="flex items-center gap-3">
        <div [class]="getIconContainerClass()">
          <lucide-icon [img]="icon" class="w-5 h-5" [class]="getIconClass()"></lucide-icon>
        </div>
        <div class="flex-1">
          <p class="text-sm text-muted-foreground">{{ label }}</p>
          <p class="text-2xl font-bold" [class]="getValueClass()">{{ value }}</p>
          @if (change !== undefined) {
            <p class="text-xs" [class]="getChangeClass()">{{ getChangeText() }}</p>
          }
          @if (subtext) {
            <p class="text-xs text-muted-foreground">{{ subtext }}</p>
          }
        </div>
      </div>
    </div>
  `
})
export class KpiCardComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() icon: any;
  @Input() change?: number;
  @Input() subtext?: string;
  @Input() variant: 'default' | 'success' | 'warning' | 'destructive' = 'default';

  getIconContainerClass(): string {
    const baseClass = 'w-10 h-10 rounded-lg flex items-center justify-center';
    switch (this.variant) {
      case 'success':
        return `${baseClass} bg-secondary/10`;
      case 'warning':
        return `${baseClass} bg-yellow-100`;
      case 'destructive':
        return `${baseClass} bg-destructive/10`;
      default:
        return `${baseClass} bg-primary/10`;
    }
  }

  getIconClass(): string {
    switch (this.variant) {
      case 'success':
        return 'text-secondary';
      case 'warning':
        return 'text-yellow-600';
      case 'destructive':
        return 'text-destructive';
      default:
        return 'text-primary';
    }
  }

  getValueClass(): string {
    switch (this.variant) {
      case 'success':
        return 'text-secondary';
      case 'destructive':
        return 'text-destructive';
      default:
        return 'text-foreground';
    }
  }

  getChangeClass(): string {
    if (this.change === undefined) return '';
    
    if (this.change > 0) {
      return this.variant === 'destructive' ? 'text-destructive' : 'text-secondary';
    } else {
      return 'text-muted-foreground';
    }
  }

  getChangeText(): string {
    if (this.change === undefined) return '';
    
    const sign = this.change > 0 ? '+' : '';
    return `${sign}${this.change}%`;
  }
}