import { Component, OnInit, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  LucideAngularModule,
  FileText,
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  Download,
} from "lucide-angular";
import { KpiCardComponent } from "../../components/kpi-card/kpi-card.component";
import { InvoiceUploadPageComponent } from "../invoice-upload-page/invoice-upload-page.component";

interface Invoice {
  id: string;
  customer: string;
  amount: number;
  date: string;
  dueDate: string;
  status: "paid" | "pending" | "overdue" | "draft";
}

@Component({
  selector: "app-invoices",
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule, KpiCardComponent],
  templateUrl: "./invoices.component.html",
})
export class InvoicesComponent implements OnInit {
  // Icons
  fileTextIcon = FileText;
  plusIcon = Plus;
  searchIcon = Search;
  filterIcon = Filter;
  eyeIcon = Eye;
  editIcon = Edit;
  downloadIcon = Download;
  trash2Icon = Trash2;

  searchTerm = "";
  currentPage = 1;
  pageSize = 10;

  Math = Math; // Make Math available in template

  invoices: Invoice[] = [
    {
      id: "INV-2025-001",
      customer: "Acme Corp",
      amount: 12500,
      date: "2025-08-15",
      dueDate: "2025-08-30",
      status: "paid",
    },
    {
      id: "INV-2025-002",
      customer: "Tech Solutions Ltd",
      amount: 24500,
      date: "2025-07-20",
      dueDate: "2025-08-20",
      status: "overdue",
    },
    {
      id: "INV-2025-003",
      customer: "Design Studio Co",
      amount: 8900,
      date: "2025-08-10",
      dueDate: "2025-08-28",
      status: "pending",
    },
    {
      id: "INV-2025-004",
      customer: "Marketing Inc",
      amount: 5600,
      date: "2025-08-18",
      dueDate: "2025-09-05",
      status: "pending",
    },
    {
      id: "INV-2025-005",
      customer: "Startup Innovations",
      amount: 18900,
      date: "2025-08-12",
      dueDate: "2025-09-12",
      status: "pending",
    },
    {
      id: "INV-2025-006",
      customer: "Enterprise Group",
      amount: 45600,
      date: "2025-08-05",
      dueDate: "2025-09-20",
      status: "paid",
    },
    {
      id: "INV-2025-007",
      customer: "Creative Agency",
      amount: 7200,
      date: "2025-08-08",
      dueDate: "2025-08-25",
      status: "overdue",
    },
    {
      id: "INV-2025-008",
      customer: "Tech Startup",
      amount: 15300,
      date: "2025-08-14",
      dueDate: "2025-09-15",
      status: "draft",
    },
  ];

  filteredInvoices = signal<Invoice[]>(this.invoices);

  get totalInvoices(): number {
    return this.filteredInvoices().length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalInvoices / this.pageSize);
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.pageSize;
  }

  ngOnInit() {
    this.updateFilteredInvoices();
  }

  onSearch() {
    this.currentPage = 1;
    this.updateFilteredInvoices();
  }

  updateFilteredInvoices() {
    let filtered = this.invoices;

    if (this.searchTerm) {
      filtered = filtered.filter(
        (invoice) =>
          invoice.id.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          invoice.customer.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    this.filteredInvoices.set(filtered.slice(startIndex, endIndex));
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateFilteredInvoices();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateFilteredInvoices();
    }
  }

  toggleSelectAll() {
    // Implementation for select all functionality
    console.log("Toggle select all");
  }

  getStatusClass(status: string): string {
    const baseClass =
      "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium";

    switch (status) {
      case "paid":
        return `${baseClass} bg-secondary/10 text-secondary`;
      case "pending":
        return `${baseClass} bg-yellow-100 text-yellow-800`;
      case "overdue":
        return `${baseClass} bg-destructive/10 text-destructive`;
      case "draft":
        return `${baseClass} bg-muted text-muted-foreground`;
      default:
        return `${baseClass} bg-muted text-muted-foreground`;
    }
  }
}
