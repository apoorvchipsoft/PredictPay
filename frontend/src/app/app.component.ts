import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Page Components
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InvoicesPageComponent } from './pages/invoices-page/invoices-page.component';
import { InvoiceUploadPageComponent } from './pages/invoice-upload-page/invoice-upload-page.component';
import { PaymentsPageComponent } from './pages/payments-page/payments-page.component';
import { AnalyticsPageComponent } from './pages/analytics-page/analytics-page.component';
import { RiskAnalysisPageComponent } from './pages/risk-analysis-page/risk-analysis-page.component';
import { CashFlowForecastPageComponent } from './pages/cash-flow-forecast-page/cash-flow-forecast-page.component';
import { AutoMessagesPageComponent } from './pages/auto-messages-page/auto-messages-page.component';
import { ChatbotPageComponent } from './pages/chatbot-page/chatbot-page.component';
import { ReceivablesReportPageComponent } from './pages/receivables-report-page/receivables-report-page.component';
import { ReminderSettingsPageComponent } from './pages/reminder-settings-page/reminder-settings-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LoginPageComponent,
    DashboardComponent,
    InvoicesPageComponent,
    InvoiceUploadPageComponent,
    PaymentsPageComponent,
    AnalyticsPageComponent,
    RiskAnalysisPageComponent,
    CashFlowForecastPageComponent,
    AutoMessagesPageComponent,
    ChatbotPageComponent,
    ReceivablesReportPageComponent,
    ReminderSettingsPageComponent,
    SidebarComponent
  ],
  template: `
    <div class="min-h-screen bg-background">
      @if (!isLoggedIn()) {
        <app-login-page (login)="handleLogin()"></app-login-page>
      } @else {
        <div class="flex h-screen bg-background">
          <app-sidebar 
            [currentPage]="currentPage()"
            (pageChange)="handlePageChange($event)"
            (logout)="handleLogout()">
          </app-sidebar>
          <main class="flex-1 overflow-auto">
            <div class="p-8">
              @switch (currentPage()) {
                @case ('dashboard') {
                  <app-dashboard></app-dashboard>
                }
                @case ('invoices') {
                  <app-invoices-page></app-invoices-page>
                }
                @case ('invoice-upload') {
                  <app-invoice-upload-page></app-invoice-upload-page>
                }
                @case ('payments') {
                  <app-payments-page></app-payments-page>
                }
                @case ('analytics') {
                  <app-analytics-page></app-analytics-page>
                }
                @case ('risk-analysis') {
                  <app-risk-analysis-page></app-risk-analysis-page>
                }
                @case ('cash-flow') {
                  <app-cash-flow-forecast-page></app-cash-flow-forecast-page>
                }
                @case ('auto-messages') {
                  <app-auto-messages-page></app-auto-messages-page>
                }
                @case ('chatbot') {
                  <app-chatbot-page></app-chatbot-page>
                }
                @case ('receivables-report') {
                  <app-receivables-report-page></app-receivables-report-page>
                }
                @case ('reminders') {
                  <app-reminder-settings-page></app-reminder-settings-page>
                }
                @case ('user-management') {
                  <div class="text-center py-12">
                    <p class="text-muted-foreground">User Management - Coming Soon</p>
                  </div>
                }
                @case ('access-control') {
                  <div class="text-center py-12">
                    <p class="text-muted-foreground">Access Control - Coming Soon</p>
                  </div>
                }
                @default {
                  <app-dashboard></app-dashboard>
                }
              }
            </div>
          </main>
        </div>
      }
    </div>
  `
})
export class AppComponent {
  // Angular 20 signals for state management
  isLoggedIn = signal(true); // Set to true for demo
  currentPage = signal('dashboard');

  handleLogin() {
    this.isLoggedIn.set(true);
  }

  handleLogout() {
    this.isLoggedIn.set(false);
    this.currentPage.set('dashboard');
  }

  handlePageChange(page: string) {
    this.currentPage.set(page);
  }
}