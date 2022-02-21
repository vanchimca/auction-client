import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BidDetails } from '../model/bid-details';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BidServiceService {

  private bidsUrl: string;

  constructor(private http: HttpClient) {
    this.bidsUrl = 'http://localhost:8091/e-auction/api/v1/buyer/bids/';
  }

  public findAll(productId : string): Observable<BidDetails[]> {
    return this.http.get<BidDetails[]>(this.bidsUrl+productId);
  }

  public save(bid: BidDetails) {
    this.bidsUrl = 'http://localhost:8091/e-auction/api/v1/buyer/place-bid';
    return this.http.post<BidDetails>(this.bidsUrl, bid);
  }
}
