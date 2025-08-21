import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Construction } from 'lucide-angular';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="flex flex-col items-center justify-center py-24">
      <div class="text-center space-y-6">
        <div class="w-20 h-20 bg-muted/50 rounded-full flex items-center justify-center">
          <lucide-icon [img]="constructionIcon" class="w-10 h-10 text-muted-foreground"></lucide-icon>
        </div>
        <div class="space-y-2">
          <h1 class="text-2xl font-bold text-foreground">{{ title }} - Coming Soon</h1>
          <p class="text-muted-foreground max-w-md">
            This feature is currently under development. Check back soon for updates!
          </p>
        </div>
      </div>
    </div>
  `
})
export class ComingSoonComponent implements OnInit {
  constructionIcon = Construction;
  title = 'Feature';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.title = this.route.snapshot.data['title'] || 'Feature';
  }
}