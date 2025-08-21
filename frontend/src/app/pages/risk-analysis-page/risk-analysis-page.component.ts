import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LucideAngularModule, Brain } from "lucide-angular";

@Component({
  selector: "app-risk-analysis-page",
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: "./risk-analysis-page.component.html",
})
export class RiskAnalysisPageComponent {
  brainIcon = Brain;
}
