import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../service/products-service.service';
import { Products } from '../../../model/products';
import { DatePickerComponent, FocusEventArgs } from '@syncfusion/ej2-angular-calendars';
import { ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})

export class ProductsFormComponent {

'products': Products;
'datepipe': DatePipe = new DatePipe('en-US');

  @ViewChild('default')
    public 'datepickerObj': DatePickerComponent;

    onFocus(args: FocusEventArgs): void {
        this.datepickerObj.show();
    }

  categories = [
     {name: "Watch"},
     {name: "Jewel"},
     {name:"Car"}
    
 ];
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private productsService: ProductsService) {
    this.products = new Products();
  }

  onSubmit() {
    var e = (document.getElementById("category") as HTMLSelectElement).value;
    this.products.category = e;
    console.log('date',this.products.bidEndDate);
    console.log('date',this.datepipe.transform(this.products.bidEndDate, 'dd-MM-yyyy'));
    this.products.bidEndDate = (this.datepipe.transform(this.products.bidEndDate, 'dd-MM-yyyy'))+"";
    this.productsService.save(this.products).subscribe(result => this.gotoProductsList());
  }

  gotoProductsList() {
    console.log('go to product details')
    //this.router.navigate(['../products']);
    this.router.navigateByUrl('/products');
    //this.router.navigate(['../products'], { relativeTo: this.route });
  }
}