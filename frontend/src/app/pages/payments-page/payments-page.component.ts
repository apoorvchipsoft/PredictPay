import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LucideAngularModule, CreditCard } from "lucide-angular";

@Component({
  selector: "app-payments-page",
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: "./payments-page.component.html",
})
export class PaymentsPageComponent {
  creditCardIcon = CreditCard;
}
