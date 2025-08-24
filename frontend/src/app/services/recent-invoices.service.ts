import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

export interface RecentInvoice {
  id: string;
  customer: string;
  amount: number;
  dueDate: string;
  status: string;
}

@Injectable({ providedIn: "root" })
export class RecentInvoicesService {
  constructor(private http: HttpClient) {}

  getRecentInvoices(): Observable<RecentInvoice[]> {
    return this.http.get<RecentInvoice[]>(
      `${environment.API_URL}/api/dashboard/recent-invoices`
    );
  }
}
