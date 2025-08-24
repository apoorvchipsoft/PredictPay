import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

export interface UpcomingPayment {
  id: string;
  customer: string;
  amount: number;
  dueDate: string;
  status: string;
}

@Injectable({ providedIn: "root" })
export class UpcomingPaymentsService {
  constructor(private http: HttpClient) {}

  getUpcomingPayments(): Observable<UpcomingPayment[]> {
    return this.http.get<UpcomingPayment[]>(
      `${environment.API_URL}/api/dashboard/upcoming-payments`
    );
  }
}
