import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BidDetails } from '../../../model/bid-details';
import { BidServiceService } from '../../../service/bid-service.service';

@Component({
  selector: 'app-bids-list',
  templateUrl: './bids-list.component.html',
  styleUrls: ['./bids-list.component.css']
})
export class BidsListComponent implements OnInit {

  'bidDetails': BidDetails[];
  'prodId': string;
  'sub': Subscription;
  'updatePrice' : number;
  'currentPrice' : number;

  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router, private bidService: BidServiceService) {
  }

  ngOnInit() {

    this.prodId = this._Activatedroute.snapshot.params['productId'];
    console.log(this.prodId);
    this.bidService.findAll(this.prodId).subscribe(data => {
      this.bidDetails = data;
    });
  }
  
   
updateList(event: any) {
  this.updatePrice = event.target.textContent;
  
}

updateBid(bidId: string, mail:string, currentPrice:number){
  if(this.updatePrice == undefined || this.updatePrice == currentPrice){
    alert("Update the bid amount in the table");
  }else{
    this.bidService.update(bidId,mail,this.updatePrice,this.prodId).subscribe(data => {
      alert(data);
      if(data == "Bid amount updated successfully"){
        this.gotoProductsList();
      }
    });
  }
  
}
gotoProductsList() {

  this._router.navigateByUrl('/products').then(() => {
    window.location.reload();
  });
}
}
