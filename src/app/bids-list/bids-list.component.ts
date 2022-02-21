import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BidDetails } from '../../../model/bid-details';
import { BidServiceService } from '../../../service/bid-service.service';

@Component({
  selector: 'app-bids-list',
  templateUrl: './bids-list.component.html',
  styleUrls: ['./bids-list.component.css']
})
export class BidsListComponent implements OnInit {

  'bidDetails' : BidDetails[];
  'prodId' : string;
  'sub' : Subscription;

  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,private bidService: BidServiceService) {
  }

  ngOnInit() {
    
    this.prodId=this._Activatedroute.snapshot.params['productId'];  
    console.log(this.prodId);
   //this.prodId=this._Activatedroute.snapshot.paramMap.get("id");
    
      /*this.sub=this._Activatedroute.paramMap.subscribe(params => { 
        console.log(params);
         this.prodId = params.get('productId'); 
    });*/

    this.bidService.findAll(this.prodId).subscribe(data => {
      this.bidDetails = data;
  });
}
}