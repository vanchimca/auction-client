import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Products } from '../model/products';
import { Observable, of } from 'rxjs';

@Injectable()
export class ProductsService {

  private productsUrl: string;

  constructor(private http: HttpClient) {
    this.productsUrl = 'https://h6vo25tayi.execute-api.us-east-1.amazonaws.com/Dev/seller';
  }

  public findAll(): Observable<Products[]> {
    return this.http.get<Products[]>(this.productsUrl);
  }

  public save(product: Products) {
    this.productsUrl = 'https://h6vo25tayi.execute-api.us-east-1.amazonaws.com/Dev/seller';
    return this.http.post(this.productsUrl, product, { responseType: 'text' });
  }

  public delete(productId: string) {
    this.productsUrl = 'https://h6vo25tayi.execute-api.us-east-1.amazonaws.com/Dev/seller/';
    return this.http.delete(this.productsUrl + productId, { responseType: 'text' });
  }
}