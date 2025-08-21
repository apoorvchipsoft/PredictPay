import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/dashboard', 
    pathMatch: 'full' 
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'invoices',
    loadComponent: () => import('./pages/invoices/invoices.component').then(m => m.InvoicesComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'invoice-upload',
    loadComponent: () => import('./pages/invoice-upload/invoice-upload.component').then(m => m.InvoiceUploadComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'payments',
    loadComponent: () => import('./pages/payments/payments.component').then(m => m.PaymentsComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'analytics',
    loadComponent: () => import('./pages/analytics/analytics.component').then(m => m.AnalyticsComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'risk-analysis',
    loadComponent: () => import('./pages/risk-analysis/risk-analysis.component').then(m => m.RiskAnalysisComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'cash-flow',
    loadComponent: () => import('./pages/cash-flow/cash-flow.component').then(m => m.CashFlowComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'auto-messages',
    loadComponent: () => import('./pages/auto-messages/auto-messages.component').then(m => m.AutoMessagesComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'chatbot',
    loadComponent: () => import('./pages/chatbot/chatbot.component').then(m => m.ChatbotComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'receivables-report',
    loadComponent: () => import('./pages/receivables-report/receivables-report.component').then(m => m.ReceivablesReportComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'reminders',
    loadComponent: () => import('./pages/reminder-settings/reminder-settings.component').then(m => m.ReminderSettingsComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'user-management',
    loadComponent: () => import('./pages/coming-soon/coming-soon.component').then(m => m.ComingSoonComponent),
    canActivate: [AuthGuard],
    data: { title: 'User Management' }
  },
  {
    path: 'access-control',
    loadComponent: () => import('./pages/coming-soon/coming-soon.component').then(m => m.ComingSoonComponent),
    canActivate: [AuthGuard],
    data: { title: 'Access Control' }
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];