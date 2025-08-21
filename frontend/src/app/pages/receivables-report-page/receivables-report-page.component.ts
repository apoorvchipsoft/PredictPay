import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, FileText } from 'lucide-angular';

@Component({
  selector: 'app-receivables-report-page',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="space-y-8">
      <div>
        <h1>Receivables Report</h1>
        <p class="text-muted-foreground mt-1">Comprehensive analysis of outstanding receivables</p>
      </div>
      
      <div class="bg-card rounded-lg border border-border p-12 text-center">
        <lucide-icon [img]="fileTextIcon" class="w-16 h-16 text-muted-foreground mx-auto mb-4"></lucide-icon>
        <h3>Receivables Reporting</h3>
        <p class="text-muted-foreground">Advanced receivables analytics coming soon</p>
      </div>
    </div>
  `
})
export class ReceivablesReportPageComponent {
  fileTextIcon = FileText;
}