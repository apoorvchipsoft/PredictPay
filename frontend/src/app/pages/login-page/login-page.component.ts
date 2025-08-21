import { Component, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Building2 } from 'lucide-angular';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-muted/50">
      <div class="w-full max-w-md p-8 space-y-8 bg-card rounded-lg shadow-lg border border-border">
        <!-- Logo and Title -->
        <div class="text-center space-y-4">
          <div class="flex justify-center">
            <div class="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
              <lucide-icon [img]="building2Icon" class="w-8 h-8 text-primary-foreground"></lucide-icon>
            </div>
          </div>
          <div>
            <h1 class="text-2xl font-bold text-foreground">ReceivablesFlow</h1>
            <p class="text-sm text-muted-foreground">AI-Powered Finance Management</p>
          </div>
        </div>

        <!-- Login Form -->
        <form (ngSubmit)="handleSubmit()" class="space-y-6">
          <div class="space-y-4">
            <div class="space-y-2">
              <label for="email" class="text-sm font-medium text-foreground">Email</label>
              <input
                id="email"
                type="email"
                [(ngModel)]="email"
                name="email"
                placeholder="Enter your email"
                class="w-full px-3 py-2 bg-input-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary"
                required>
            </div>
            <div class="space-y-2">
              <label for="password" class="text-sm font-medium text-foreground">Password</label>
              <input
                id="password"
                type="password"
                [(ngModel)]="password"
                name="password"
                placeholder="Enter your password"
                class="w-full px-3 py-2 bg-input-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary"
                required>
            </div>
          </div>

          <button
            type="submit"
            class="w-full bg-primary text-primary-foreground py-2 px-4 rounded-sm hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            Sign In
          </button>
        </form>

        <!-- Demo Notice -->
        <div class="text-center">
          <p class="text-xs text-muted-foreground">
            This is a demo application. Click "Sign In" to continue.
          </p>
        </div>
      </div>
    </div>
  `
})
export class LoginPageComponent {
  @Output() login = new EventEmitter<void>();

  building2Icon = Building2;
  email = signal('demo@receivablesflow.com');
  password = signal('demo123');

  handleSubmit() {
    // For demo purposes, always allow login
    this.login.emit();
  }
}