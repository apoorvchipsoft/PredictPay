import { Component, OnInit } from "@angular/core";
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
import {
  RecentInvoicesService,
  RecentInvoice,
} from "../../services/recent-invoices.service";
import {
  UpcomingPaymentsService,
  UpcomingPayment,
} from "../../services/upcoming-payments.service";
import {
  DashboardDataService,
  DashboardFigures,
} from "../../services/dashboard-data.service";

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
export class DashboardComponent implements OnInit {
  // Icons
  rupeeSign = "₹";
  creditCardIcon = CreditCard;
  trendingUpIcon = TrendingUp;
  usersIcon = Users;
  calendarIcon = Calendar;
  arrowUpRightIcon = ArrowUpRight;
  arrowDownRightIcon = ArrowDownRight;
  fileTextIcon = FileText;
  filterIcon = Filter;

  figures: DashboardFigures | null = null;
  recentInvoices: RecentInvoice[] = [];
  upcomingPayments: UpcomingPayment[] = [];

  constructor(
    private dashboardDataService: DashboardDataService,
    private recentInvoicesService: RecentInvoicesService,
    private upcomingPaymentsService: UpcomingPaymentsService
  ) {}

  ngOnInit() {
    this.dashboardDataService.getDashboardFigures().subscribe((data) => {
      this.figures = data;
    });
    this.recentInvoicesService.getRecentInvoices().subscribe((data) => {
      this.recentInvoices = data;
    });
    this.upcomingPaymentsService.getUpcomingPayments().subscribe((data) => {
      this.upcomingPayments = data;
    });
  }

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
