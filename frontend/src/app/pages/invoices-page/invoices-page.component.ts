import { Component, signal, computed } from "@angular/core";
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
  MoreHorizontal,
  Calendar,
} from "lucide-angular";
import { KpiCardComponent } from "../../components/kpi-card/kpi-card.component";

interface Invoice {
  id: string;
  customer: string;
  amount: number;
  date: string;
  dueDate: string;
  status: "paid" | "pending" | "overdue" | "draft";
  selected?: boolean;
}

@Component({
  selector: "app-invoices-page",
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule, KpiCardComponent],
  templateUrl: "./invoices-page.component.html",
})
export class InvoicesPageComponent {
  // Icons
  fileTextIcon = FileText;
  plusIcon = Plus;
  searchIcon = Search;
  filterIcon = Filter;
  eyeIcon = Eye;
  editIcon = Edit;
  downloadIcon = Download;
  trash2Icon = Trash2;
  moreHorizontalIcon = MoreHorizontal;
  calendarIcon = Calendar;

  // State
  searchTerm = signal("");
  statusFilter = signal("");
  sortField = signal<keyof Invoice>("id");
  sortDirection = signal<"asc" | "desc">("desc");
  currentPage = signal(1);
  pageSize = signal(10);

  Math = Math; // Make Math available in template

  invoices = signal<Invoice[]>([
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
    {
      id: "INV-2025-009",
      customer: "Global Solutions",
      amount: 32400,
      date: "2025-08-22",
      dueDate: "2025-09-25",
      status: "pending",
    },
    {
      id: "INV-2025-010",
      customer: "Local Business",
      amount: 2800,
      date: "2025-08-25",
      dueDate: "2025-09-30",
      status: "draft",
    },
  ]);

  // Computed values
  filteredInvoices = computed(() => {
    let filtered = this.invoices();

    // Apply search filter
    if (this.searchTerm()) {
      const term = this.searchTerm().toLowerCase();
      filtered = filtered.filter(
        (invoice) =>
          invoice.id.toLowerCase().includes(term) ||
          invoice.customer.toLowerCase().includes(term)
      );
    }

    // Apply status filter
    if (this.statusFilter()) {
      filtered = filtered.filter(
        (invoice) => invoice.status === this.statusFilter()
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      const field = this.sortField();
      const direction = this.sortDirection();
      let comparison = 0;

      if (typeof a[field] === "string") {
        comparison = (a[field] as string).localeCompare(b[field] as string);
      } else {
        comparison = (a[field] as number) - (b[field] as number);
      }

      return direction === "asc" ? comparison : -comparison;
    });

    return filtered;
  });

  paginatedInvoices = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize();
    const end = start + this.pageSize();
    return this.filteredInvoices().slice(start, end);
  });

  totalPages = computed(() => {
    return Math.ceil(this.filteredInvoices().length / this.pageSize());
  });

  selectedInvoices = computed(() => {
    return this.invoices().filter((invoice) => invoice.selected);
  });

  invoiceStats = computed(() => {
    const invoices = this.invoices();
    return {
      total: invoices.length,
      paid: invoices.filter((i) => i.status === "paid").length,
      pending: invoices.filter((i) => i.status === "pending").length,
      overdue: invoices.filter((i) => i.status === "overdue").length,
      draft: invoices.filter((i) => i.status === "draft").length,
    };
  });

  updateFilters() {
    this.currentPage.set(1);
  }

  sortBy(field: keyof Invoice) {
    if (this.sortField() === field) {
      this.sortDirection.set(this.sortDirection() === "asc" ? "desc" : "asc");
    } else {
      this.sortField.set(field);
      this.sortDirection.set("asc");
    }
  }

  previousPage() {
    if (this.currentPage() > 1) {
      this.currentPage.set(this.currentPage() - 1);
    }
  }

  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.set(this.currentPage() + 1);
    }
  }

  getStartIndex(): number {
    return (this.currentPage() - 1) * this.pageSize();
  }

  toggleInvoiceSelection(invoice: Invoice) {
    const invoices = this.invoices();
    const index = invoices.findIndex((i) => i.id === invoice.id);
    if (index !== -1) {
      invoices[index] = { ...invoice, selected: !invoice.selected };
      this.invoices.set([...invoices]);
    }
  }

  toggleSelectAll() {
    const currentPageInvoices = this.paginatedInvoices();
    const allSelected = currentPageInvoices.every(
      (invoice) => invoice.selected
    );

    const invoices = this.invoices();
    currentPageInvoices.forEach((pageInvoice) => {
      const index = invoices.findIndex((i) => i.id === pageInvoice.id);
      if (index !== -1) {
        invoices[index] = { ...invoices[index], selected: !allSelected };
      }
    });

    this.invoices.set([...invoices]);
  }

  isAllSelected(): boolean {
    const currentPageInvoices = this.paginatedInvoices();
    return (
      currentPageInvoices.length > 0 &&
      currentPageInvoices.every((invoice) => invoice.selected)
    );
  }

  isSomeSelected(): boolean {
    const currentPageInvoices = this.paginatedInvoices();
    return (
      currentPageInvoices.some((invoice) => invoice.selected) &&
      !this.isAllSelected()
    );
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

  trackInvoice(index: number, invoice: Invoice) {
    return invoice.id;
  }
}
