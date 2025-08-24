import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

export interface DashboardFigures {
  totalInvoices: number;
  paidInvoices: number;
  overdueInvoices: number;
  draftInvoices: number;
  totalAmount: number;
}

@Injectable({ providedIn: "root" })
export class DashboardDataService {
  constructor(private http: HttpClient) {}

  getDashboardFigures(): Observable<DashboardFigures> {
    return this.http.get<DashboardFigures>(
      `${environment.API_URL}/api/dashboard/figures`
    );
  }
}
