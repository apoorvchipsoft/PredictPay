import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  LucideAngularModule, 
  LayoutDashboard, 
  FileText, 
  CreditCard, 
  BarChart3, 
  Building2,
  LogOut,
  Upload,
  Brain,
  Bell,
  MessageCircle,
  TrendingUp,
  Users,
  Shield
} from 'lucide-angular';

interface MenuItem {
  id: string;
  label: string;
  icon: any;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="w-64 h-screen bg-card border-r border-border flex flex-col">
      <!-- Logo -->
      <div class="p-6 border-b border-border">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <lucide-icon [img]="building2Icon" class="w-6 h-6 text-primary-foreground"></lucide-icon>
          </div>
          <div>
            <h2 class="font-bold">ReceivablesFlow</h2>
            <p class="text-xs text-muted-foreground">AI-Powered Finance</p>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 p-4 space-y-6 overflow-y-auto">
        <div class="space-y-2">
          <h3 class="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Core
          </h3>
          @for (item of coreMenuItems; track item.id) {
            <button
              [class]="getButtonClass(item.id)"
              (click)="onPageChange(item.id)"
              type="button">
              <lucide-icon [img]="item.icon" class="w-4 h-4"></lucide-icon>
              {{ item.label }}
            </button>
          }
        </div>

        <div class="h-px bg-border"></div>

        <div class="space-y-2">
          <h3 class="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            AI Layer
          </h3>
          @for (item of aiMenuItems; track item.id) {
            <button
              [class]="getButtonClass(item.id)"
              (click)="onPageChange(item.id)"
              type="button">
              <lucide-icon [img]="item.icon" class="w-4 h-4"></lucide-icon>
              {{ item.label }}
            </button>
          }
        </div>

        <div class="h-px bg-border"></div>

        <div class="space-y-2">
          <h3 class="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Reports
          </h3>
          @for (item of reportsMenuItems; track item.id) {
            <button
              [class]="getButtonClass(item.id)"
              (click)="onPageChange(item.id)"
              type="button">
              <lucide-icon [img]="item.icon" class="w-4 h-4"></lucide-icon>
              {{ item.label }}
            </button>
          }
        </div>

        <div class="h-px bg-border"></div>

        <div class="space-y-2">
          <h3 class="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Settings
          </h3>
          @for (item of settingsMenuItems; track item.id) {
            <button
              [class]="getButtonClass(item.id)"
              (click)="onPageChange(item.id)"
              type="button">
              <lucide-icon [img]="item.icon" class="w-4 h-4"></lucide-icon>
              {{ item.label }}
            </button>
          }
        </div>
      </nav>

      <!-- Logout -->
      <div class="p-4 border-t border-border">
        <button
          class="w-full justify-start gap-3 h-10 text-sm text-muted-foreground hover:text-destructive hover:bg-destructive/10 flex items-center px-3 rounded-sm transition-colors"
          (click)="onLogout()">
          <lucide-icon [img]="logOutIcon" class="w-4 h-4"></lucide-icon>
          Logout
        </button>
      </div>
    </div>
  `
})
export class SidebarComponent {
  @Input() currentPage: string = 'dashboard';
  @Output() pageChange = new EventEmitter<string>();
  @Output() logout = new EventEmitter<void>();

  // Icons
  building2Icon = Building2;
  logOutIcon = LogOut;

  coreMenuItems: MenuItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'invoices', label: 'Invoices', icon: FileText },
    { id: 'invoice-upload', label: 'Invoice Upload (OCR)', icon: Upload },
    { id: 'payments', label: 'Payments', icon: CreditCard },
  ];

  aiMenuItems: MenuItem[] = [
    { id: 'risk-analysis', label: 'Risk Analysis', icon: Brain },
    { id: 'auto-messages', label: 'Auto Messages', icon: MessageCircle },
    { id: 'chatbot', label: 'AI Assistant', icon: MessageCircle },
  ];

  reportsMenuItems: MenuItem[] = [
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'cash-flow', label: 'Cash Flow Forecast', icon: TrendingUp },
    { id: 'receivables-report', label: 'Receivables Report', icon: FileText },
  ];

  settingsMenuItems: MenuItem[] = [
    { id: 'reminders', label: 'Reminder Settings', icon: Bell },
    { id: 'user-management', label: 'User Management', icon: Users },
    { id: 'access-control', label: 'Access Control', icon: Shield },
  ];

  onPageChange(page: string) {
    this.pageChange.emit(page);
  }

  onLogout() {
    this.logout.emit();
  }

  getButtonClass(itemId: string): string {
    const baseClass = 'w-full justify-start gap-3 h-10 text-sm flex items-center px-3 rounded-sm transition-colors';
    
    if (this.currentPage === itemId) {
      return `${baseClass} bg-primary text-primary-foreground shadow-sm`;
    } else {
      return `${baseClass} hover:bg-accent`;
    }
  }
}