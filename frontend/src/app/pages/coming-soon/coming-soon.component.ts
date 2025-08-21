import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommonModule } from "@angular/common";
import { LucideAngularModule, Construction } from "lucide-angular";

@Component({
  selector: "app-coming-soon",
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: "./coming-soon.component.html",
})
export class ComingSoonComponent implements OnInit {
  constructionIcon = Construction;
  title = "Feature";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.title = this.route.snapshot.data["title"] || "Feature";
  }
}
