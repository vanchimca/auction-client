import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BidServiceService } from '../../../service/bid-service.service';
import { BidDetails } from '../../../model/bid-details';

@Component({
  selector: 'app-bids-form',
  templateUrl: './bids-form.component.html',
  styleUrls: ['./bids-form.component.css']
})
export class BidsFormComponent {

  'bidDetails': BidDetails;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bidService: BidServiceService) {
    this.bidDetails = new BidDetails();
  }
  ngOnInit() {

    this.bidDetails.productId = this.route.snapshot.params['productId'];
    this.bidDetails.productName = this.route.snapshot.params['productName'];
  }
  onSubmit() {
    this.bidService.save(this.bidDetails).subscribe(data => {
      alert(data);
      if (data === "Saved Successfully") {
        this.gotoProductsList();
      }
    });

  }

  gotoProductsList() {
    this.router.navigateByUrl('/products').then(() => {
      window.location.reload();
    });

  }

}
