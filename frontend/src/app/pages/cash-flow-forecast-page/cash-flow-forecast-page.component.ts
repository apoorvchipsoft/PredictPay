import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LucideAngularModule, TrendingUp } from "lucide-angular";

@Component({
  selector: "app-cash-flow-forecast-page",
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: "./cash-flow-forecast-page.component.html",
})
export class CashFlowForecastPageComponent {
  trendingUpIcon = TrendingUp;
}
