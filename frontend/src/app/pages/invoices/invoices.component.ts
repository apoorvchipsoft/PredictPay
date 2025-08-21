import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  LucideAngularModule, 
  FileText, 
  Plus, 
  Search, 
  Filter,
  Eye,
  Edit,
  Trash2,
  Download
} from 'lucide-angular';
import { KpiCardComponent } from '../../components/kpi-card/kpi-card.component';

interface Invoice {
  id: string;
  customer: string;
  amount: number;
  date: string;
  dueDate: string;
  status: 'paid' | 'pending' | 'overdue' | 'draft';
}

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule, KpiCardComponent],
  template: `
    <div class="space-y-8">
      <!-- Page Header -->
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold text-foreground">Invoices</h1>
          <p class="text-muted-foreground mt-1">Manage all your invoices and payments</p>
        </div>
        <div class="flex items-center gap-3">
          <div class="relative">
            <lucide-icon [img]="searchIcon" class="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"></lucide-icon>
            <input
              type="text"
              placeholder="Search invoices..."
              [(ngModel)]="searchTerm"
              (input)="onSearch()"
              class="pl-10 pr-4 py-2 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring">
          </div>
          <button class="flex items-center gap-2 px-4 py-2 border border-border rounded-sm hover:bg-accent">
            <lucide-icon [img]="filterIcon" class="w-4 h-4"></lucide-icon>
            Filter
          </button>
          <button class="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-sm hover:opacity-90">
            <lucide-icon [img]="plusIcon" class="w-4 h-4"></lucide-icon>
            New Invoice
          </button>
        </div>
      </div>

      <!-- Status Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <app-kpi-card
          label="Total Invoices"
          value="156"
          [icon]="fileTextIcon"
          variant="default">
        </app-kpi-card>

        <app-kpi-card
          label="Paid Invoices"
          value="124"
          [icon]="fileTextIcon"
          variant="success">
        </app-kpi-card>

        <app-kpi-card
          label="Overdue Invoices"
          value="8"
          [icon]="fileTextIcon"
          variant="destructive">
        </app-kpi-card>

        <app-kpi-card
          label="Draft Invoices"
          value="24"
          [icon]="fileTextIcon"
          variant="warning">
        </app-kpi-card>
      </div>

      <!-- Invoices Table -->
      <div class="bg-card rounded-lg border border-border shadow-sm">
        <div class="px-6 py-4 border-b border-border">
          <h3 class="text-lg font-medium">All Invoices</h3>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-muted/50">
              <tr>
                <th class="px-6 py-3 text-left">
                  <input type="checkbox" (change)="toggleSelectAll()" class="rounded border-border">
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Invoice #
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Customer
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Amount
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Date
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Due Date
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Status
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-card divide-y divide-border">
              @for (invoice of filteredInvoices(); track invoice.id) {
                <tr class="hover:bg-muted/50">
                  <td class="px-6 py-4">
                    <input type="checkbox" class="rounded border-border">
                  </td>
                  <td class="px-6 py-4 font-medium">{{ invoice.id }}</td>
                  <td class="px-6 py-4">{{ invoice.customer }}</td>
                  <td class="px-6 py-4 font-bold">${{ invoice.amount.toLocaleString() }}</td>
                  <td class="px-6 py-4 text-muted-foreground">{{ invoice.date }}</td>
                  <td class="px-6 py-4 text-muted-foreground">{{ invoice.dueDate }}</td>
                  <td class="px-6 py-4">
                    <span [class]="getStatusClass(invoice.status)">
                      {{ invoice.status }}
                    </span>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-2">
                      <button class="p-1 hover:bg-muted rounded" title="View">
                        <lucide-icon [img]="eyeIcon" class="w-4 h-4 text-muted-foreground"></lucide-icon>
                      </button>
                      <button class="p-1 hover:bg-muted rounded" title="Edit">
                        <lucide-icon [img]="editIcon" class="w-4 h-4 text-muted-foreground"></lucide-icon>
                      </button>
                      <button class="p-1 hover:bg-muted rounded" title="Download">
                        <lucide-icon [img]="downloadIcon" class="w-4 h-4 text-muted-foreground"></lucide-icon>
                      </button>
                      <button class="p-1 hover:bg-muted rounded" title="Delete">
                        <lucide-icon [img]="trash2Icon" class="w-4 h-4 text-destructive"></lucide-icon>
                      </button>
                    </div>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="px-6 py-4 border-t border-border flex items-center justify-between">
          <p class="text-sm text-muted-foreground">
            Showing {{ startIndex + 1 }} to {{ Math.min(startIndex + pageSize, totalInvoices) }} of {{ totalInvoices }} results
          </p>
          <div class="flex items-center gap-2">
            <button 
              class="px-3 py-1 border border-border rounded hover:bg-muted"
              [disabled]="currentPage === 1"
              (click)="previousPage()">
              Previous
            </button>
            <span class="px-3 py-1">{{ currentPage }}</span>
            <button 
              class="px-3 py-1 border border-border rounded hover:bg-muted"
              [disabled]="currentPage >= totalPages"
              (click)="nextPage()">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  `
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

  searchTerm = '';
  currentPage = 1;
  pageSize = 10;

  Math = Math; // Make Math available in template

  invoices: Invoice[] = [
    { id: 'INV-2025-001', customer: 'Acme Corp', amount: 12500, date: '2025-08-15', dueDate: '2025-08-30', status: 'paid' },
    { id: 'INV-2025-002', customer: 'Tech Solutions Ltd', amount: 24500, date: '2025-07-20', dueDate: '2025-08-20', status: 'overdue' },
    { id: 'INV-2025-003', customer: 'Design Studio Co', amount: 8900, date: '2025-08-10', dueDate: '2025-08-28', status: 'pending' },
    { id: 'INV-2025-004', customer: 'Marketing Inc', amount: 5600, date: '2025-08-18', dueDate: '2025-09-05', status: 'pending' },
    { id: 'INV-2025-005', customer: 'Startup Innovations', amount: 18900, date: '2025-08-12', dueDate: '2025-09-12', status: 'pending' },
    { id: 'INV-2025-006', customer: 'Enterprise Group', amount: 45600, date: '2025-08-05', dueDate: '2025-09-20', status: 'paid' },
    { id: 'INV-2025-007', customer: 'Creative Agency', amount: 7200, date: '2025-08-08', dueDate: '2025-08-25', status: 'overdue' },
    { id: 'INV-2025-008', customer: 'Tech Startup', amount: 15300, date: '2025-08-14', dueDate: '2025-09-15', status: 'draft' }
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
      filtered = filtered.filter(invoice => 
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
    console.log('Toggle select all');
  }

  getStatusClass(status: string): string {
    const baseClass = 'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium';
    
    switch (status) {
      case 'paid':
        return `${baseClass} bg-secondary/10 text-secondary`;
      case 'pending':
        return `${baseClass} bg-yellow-100 text-yellow-800`;
      case 'overdue':
        return `${baseClass} bg-destructive/10 text-destructive`;
      case 'draft':
        return `${baseClass} bg-muted text-muted-foreground`;
      default:
        return `${baseClass} bg-muted text-muted-foreground`;
    }
  }
}