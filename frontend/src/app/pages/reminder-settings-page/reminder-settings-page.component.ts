import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LucideAngularModule, Bell } from "lucide-angular";

@Component({
  selector: "app-reminder-settings-page",
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: "./reminder-settings-page.component.html",
})
export class ReminderSettingsPageComponent {
  bellIcon = Bell;
}
