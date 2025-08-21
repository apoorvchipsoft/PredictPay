import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, TrendingUp } from 'lucide-angular';

@Component({
  selector: 'app-cash-flow-forecast-page',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="space-y-8">
      <div>
        <h1>Cash Flow Forecast</h1>
        <p class="text-muted-foreground mt-1">AI-powered cash flow predictions and scenario planning</p>
      </div>
      
      <div class="bg-card rounded-lg border border-border p-12 text-center">
        <lucide-icon [img]="trendingUpIcon" class="w-16 h-16 text-muted-foreground mx-auto mb-4"></lucide-icon>
        <h3>Cash Flow Forecasting</h3>
        <p class="text-muted-foreground">Predictive cash flow analysis coming soon</p>
      </div>
    </div>
  `
})
export class CashFlowForecastPageComponent {
  trendingUpIcon = TrendingUp;
}