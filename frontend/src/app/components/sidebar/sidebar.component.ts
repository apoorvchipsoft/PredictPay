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
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
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