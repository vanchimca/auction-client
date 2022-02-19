import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Products } from '../model/products';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductsService {

  private productsUrl: string;

  constructor(private http: HttpClient) {
    this.productsUrl = 'http://localhost:8090/e-auction/api/v1/seller/show-products';
  }

  public findAll(): Observable<Products[]> {
    return this.http.get<Products[]>(this.productsUrl);
  }

  public save(product: Products) {
    this.productsUrl = 'http://localhost:8090/e-auction/api/v1/seller/add-product';
    return this.http.post<Products>(this.productsUrl, product);
  }
}