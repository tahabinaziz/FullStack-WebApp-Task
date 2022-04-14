import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseURL = '';

  constructor(private httpClient: HttpClient) {}
  readAll(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }
}
