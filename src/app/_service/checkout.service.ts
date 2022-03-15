import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Borrow } from "../_model/borrow";
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private baseUrl = 'http://localhost:8080/api/';
  constructor(private httpClient: HttpClient) { }

  placeBorrowed(borrow: Borrow): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}checkout/borrow`, borrow);
  }
}
