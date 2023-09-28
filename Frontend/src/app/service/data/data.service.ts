import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'http://localhost:3000'; 

  constructor(private httpClient: HttpClient) { }

  getSummary(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/summary`);
  }

  getItems(pageNumber: number, pageSize: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/items?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
}
