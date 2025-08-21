import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LucideAngularModule, FileText } from "lucide-angular";

@Component({
  selector: "app-receivables-report-page",
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: "./receivables-report-page.component.html",
})
export class ReceivablesReportPageComponent {
  fileTextIcon = FileText;
}
