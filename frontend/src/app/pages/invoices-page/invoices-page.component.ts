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
  template: `
    <div class="space-y-8">
      <!-- Page Header -->
      <div class="flex items-center justify-between">
        <div>
          <h1>Invoices</h1>
          <p class="text-muted-foreground mt-1">
            Manage all your invoices and payments
          </p>
        </div>
        <div class="flex items-center gap-3">
          <div class="relative">
            <lucide-icon
              [img]="searchIcon"
              class="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            ></lucide-icon>
            <input
              type="text"
              placeholder="Search invoices..."
              [(ngModel)]="searchTerm"
              (input)="updateFilters()"
              class="pl-10 pr-4 py-2 bg-input-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring w-64"
            />
          </div>
          <select
            [(ngModel)]="statusFilter"
            (change)="updateFilters()"
            class="px-3 py-2 bg-input-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">All Status</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="overdue">Overdue</option>
            <option value="draft">Draft</option>
          </select>
          <button
            class="flex items-center gap-2 px-4 py-2 border border-border rounded-sm hover:bg-accent"
          >
            <lucide-icon [img]="calendarIcon" class="w-4 h-4"></lucide-icon>
            This Month
          </button>
          <button
            class="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-sm hover:opacity-90"
          >
            <lucide-icon [img]="plusIcon" class="w-4 h-4"></lucide-icon>
            New Invoice
          </button>
        </div>
      </div>

      <!-- Status Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <app-kpi-card
          label="Total Invoices"
          [value]="invoiceStats().total.toString()"
          [icon]="fileTextIcon"
          variant="default"
        >
        </app-kpi-card>

        <app-kpi-card
          label="Paid Invoices"
          [value]="invoiceStats().paid.toString()"
          [icon]="fileTextIcon"
          variant="success"
        >
        </app-kpi-card>

        <app-kpi-card
          label="Overdue Invoices"
          [value]="invoiceStats().overdue.toString()"
          [icon]="fileTextIcon"
          variant="destructive"
        >
        </app-kpi-card>

        <app-kpi-card
          label="Draft Invoices"
          [value]="invoiceStats().draft.toString()"
          [icon]="fileTextIcon"
          variant="warning"
        >
        </app-kpi-card>
      </div>

      <!-- Bulk Actions -->
      @if (selectedInvoices().length > 0) {
      <div class="bg-primary/10 border border-primary/20 rounded-lg p-4">
        <div class="flex items-center justify-between">
          <span class="text-sm font-medium">
            {{ selectedInvoices().length }} invoice(s) selected
          </span>
          <div class="flex items-center gap-2">
            <button
              class="px-3 py-1 bg-primary text-primary-foreground rounded text-sm hover:opacity-90"
            >
              Send Reminder
            </button>
            <button
              class="px-3 py-1 border border-border rounded text-sm hover:bg-accent"
            >
              Export Selected
            </button>
            <button
              class="px-3 py-1 text-destructive hover:bg-destructive/10 rounded text-sm"
            >
              Delete Selected
            </button>
          </div>
        </div>
      </div>
      }

      <!-- Invoices Table -->
      <div class="bg-card rounded-lg border border-border shadow-sm">
        <div class="px-6 py-4 border-b border-border">
          <div class="flex items-center justify-between">
            <h3>All Invoices</h3>
            <div class="flex items-center gap-2">
              <span class="text-sm text-muted-foreground">
                {{ filteredInvoices().length }} of
                {{ invoices().length }} invoices
              </span>
            </div>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-muted/50">
              <tr>
                <th class="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    [checked]="isAllSelected()"
                    [indeterminate]="isSomeSelected()"
                    (change)="toggleSelectAll()"
                    class="rounded border-border"
                  />
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground"
                  (click)="sortBy('id')"
                >
                  Invoice #
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground"
                  (click)="sortBy('customer')"
                >
                  Customer
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground"
                  (click)="sortBy('amount')"
                >
                  Amount
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground"
                  (click)="sortBy('date')"
                >
                  Date
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground"
                  (click)="sortBy('dueDate')"
                >
                  Due Date
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-card divide-y divide-border">
              <ng-container
                *ngFor="
                  let invoice of paginatedInvoices();
                  trackBy: trackInvoice
                "
              >
                <tr
                  class="hover:bg-muted/50"
                  [ngClass]="{ 'bg-primary/5': invoice.selected }"
                >
                  <td class="px-6 py-4">
                    <input
                      type="checkbox"
                      [checked]="invoice.selected || false"
                      (change)="toggleInvoiceSelection(invoice)"
                      class="rounded border-border"
                    />
                  </td>
                  <td class="px-6 py-4 font-medium">{{ invoice.id }}</td>
                  <td class="px-6 py-4">{{ invoice.customer }}</td>
                  <td class="px-6 py-4 font-bold">
                    {{ "$" + invoice.amount.toLocaleString() }}
                  </td>
                  <td class="px-6 py-4 text-muted-foreground">
                    {{ invoice.date }}
                  </td>
                  <td class="px-6 py-4 text-muted-foreground">
                    {{ invoice.dueDate }}
                  </td>
                  <td class="px-6 py-4">
                    <span [class]="getStatusClass(invoice.status)">
                      {{ invoice.status | titlecase }}
                    </span>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-2">
                      <button
                        class="p-1 hover:bg-muted rounded"
                        title="View Invoice"
                      >
                        <lucide-icon
                          [img]="eyeIcon"
                          class="w-4 h-4 text-muted-foreground"
                        ></lucide-icon>
                      </button>
                      <button
                        class="p-1 hover:bg-muted rounded"
                        title="Edit Invoice"
                      >
                        <lucide-icon
                          [img]="editIcon"
                          class="w-4 h-4 text-muted-foreground"
                        ></lucide-icon>
                      </button>
                      <button
                        class="p-1 hover:bg-muted rounded"
                        title="Download PDF"
                      >
                        <lucide-icon
                          [img]="downloadIcon"
                          class="w-4 h-4 text-muted-foreground"
                        ></lucide-icon>
                      </button>
                      <button
                        class="p-1 hover:bg-muted rounded"
                        title="More Actions"
                      >
                        <lucide-icon
                          [img]="moreHorizontalIcon"
                          class="w-4 h-4 text-muted-foreground"
                        ></lucide-icon>
                      </button>
                    </div>
                  </td>
                </tr>
              </ng-container>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div
          class="px-6 py-4 border-t border-border flex items-center justify-between"
        >
          <p class="text-sm text-muted-foreground">
            Showing {{ getStartIndex() + 1 }} to
            {{
              Math.min(getStartIndex() + pageSize(), filteredInvoices().length)
            }}
            of {{ filteredInvoices().length }} results
          </p>
          <div class="flex items-center gap-2">
            <button
              class="px-3 py-1 border border-border rounded hover:bg-muted text-sm"
              [disabled]="currentPage() === 1"
              (click)="previousPage()"
            >
              Previous
            </button>
            <span class="px-3 py-1 text-sm"
              >{{ currentPage() }} of {{ totalPages() }}</span
            >
            <button
              class="px-3 py-1 border border-border rounded hover:bg-muted text-sm"
              [disabled]="currentPage() >= totalPages()"
              (click)="nextPage()"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
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
