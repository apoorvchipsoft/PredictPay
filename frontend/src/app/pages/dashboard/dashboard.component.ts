import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  LucideAngularModule,
  DollarSign,
  CreditCard,
  TrendingUp,
  Users,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  FileText,
  Filter,
} from "lucide-angular";
import { KpiCardComponent } from "../../components/kpi-card/kpi-card.component";

interface Invoice {
  id: string;
  customer: string;
  amount: number;
  dueDate: string;
  status: "paid" | "pending" | "overdue";
}

interface Payment {
  date: string;
  amount: number;
  customer: string;
  status: "completed" | "pending";
}

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [CommonModule, LucideAngularModule, KpiCardComponent],
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent {
  // Icons
  dollarSignIcon = DollarSign;
  creditCardIcon = CreditCard;
  trendingUpIcon = TrendingUp;
  usersIcon = Users;
  calendarIcon = Calendar;
  arrowUpRightIcon = ArrowUpRight;
  arrowDownRightIcon = ArrowDownRight;
  fileTextIcon = FileText;
  filterIcon = Filter;

  upcomingPayments: Payment[] = [
    { date: "Aug 25", amount: 12500, customer: "Acme Corp", status: "pending" },
    {
      date: "Aug 28",
      amount: 8900,
      customer: "Design Studio",
      status: "pending",
    },
    {
      date: "Sep 2",
      amount: 15600,
      customer: "Tech Solutions",
      status: "pending",
    },
    {
      date: "Sep 5",
      amount: 7300,
      customer: "Marketing Inc",
      status: "completed",
    },
    {
      date: "Sep 8",
      amount: 19200,
      customer: "Creative Agency",
      status: "pending",
    },
  ];

  recentInvoices: Invoice[] = [
    {
      id: "INV-2025-001",
      customer: "Acme Corp",
      amount: 12500,
      dueDate: "2025-08-30",
      status: "paid",
    },
    {
      id: "INV-2025-002",
      customer: "Tech Solutions Ltd",
      amount: 24500,
      dueDate: "2025-08-20",
      status: "overdue",
    },
    {
      id: "INV-2025-003",
      customer: "Design Studio Co",
      amount: 8900,
      dueDate: "2025-08-28",
      status: "pending",
    },
    {
      id: "INV-2025-004",
      customer: "Marketing Inc",
      amount: 5600,
      dueDate: "2025-09-05",
      status: "pending",
    },
    {
      id: "INV-2025-005",
      customer: "Startup Innovations",
      amount: 18900,
      dueDate: "2025-09-12",
      status: "pending",
    },
  ];

  getPaymentStatusClass(status: string): string {
    const baseClass =
      "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium";

    switch (status) {
      case "completed":
        return `${baseClass} bg-secondary/10 text-secondary`;
      case "pending":
        return `${baseClass} bg-yellow-100 text-yellow-800`;
      default:
        return `${baseClass} bg-muted text-muted-foreground`;
    }
  }

  getInvoiceStatusClass(status: string): string {
    const baseClass =
      "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium";

    switch (status) {
      case "paid":
        return `${baseClass} bg-secondary/10 text-secondary`;
      case "pending":
        return `${baseClass} bg-yellow-100 text-yellow-800`;
      case "overdue":
        return `${baseClass} bg-destructive/10 text-destructive`;
      default:
        return `${baseClass} bg-muted text-muted-foreground`;
    }
  }
}
