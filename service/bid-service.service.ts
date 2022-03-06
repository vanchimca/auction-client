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
    this.bidsUrl = 'https://lymp38xjfi.execute-api.us-east-1.amazonaws.com/Dev/';
  }

  public findAll(productId: string): Observable<BidDetails[]> {
    return this.http.get<BidDetails[]>(this.bidsUrl + productId);
  }

  public save(bid: BidDetails) {
    this.bidsUrl = 'https://lymp38xjfi.execute-api.us-east-1.amazonaws.com/Dev/buyer';
    return this.http.post(this.bidsUrl, bid, { responseType: 'text' });
  }
  public update(bidId: String, mail: string, bidAmount: number, productId:string) {
    this.bidsUrl = 'http://buyerservice.us-east-1.elasticbeanstalk.com/e-auction/api/v1/buyer/updateBid/';
    return this.http.get(this.bidsUrl+bidId+"/"+mail+"/"+bidAmount+"/"+productId, { responseType: 'text' });
  }
}
