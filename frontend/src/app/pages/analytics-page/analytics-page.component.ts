import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LucideAngularModule, BarChart3 } from "lucide-angular";

@Component({
  selector: "app-analytics-page",
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: "./analytics-page.component.html",
})
export class AnalyticsPageComponent {
  barChart3Icon = BarChart3;
}
