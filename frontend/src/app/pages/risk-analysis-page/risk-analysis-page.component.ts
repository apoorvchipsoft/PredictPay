import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Brain } from 'lucide-angular';

@Component({
  selector: 'app-risk-analysis-page',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="space-y-8">
      <div>
        <h1>Risk Analysis</h1>
        <p class="text-muted-foreground mt-1">AI-powered risk assessment and client analysis</p>
      </div>
      
      <div class="bg-card rounded-lg border border-border p-12 text-center">
        <lucide-icon [img]="brainIcon" class="w-16 h-16 text-muted-foreground mx-auto mb-4"></lucide-icon>
        <h3>AI Risk Analysis</h3>
        <p class="text-muted-foreground">Intelligent risk assessment tools coming soon</p>
      </div>
    </div>
  `
})
export class RiskAnalysisPageComponent {
  brainIcon = Brain;
}