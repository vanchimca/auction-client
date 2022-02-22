import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../service/products-service.service';
import { Products } from '../../../model/products';
@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})

export class ProductsFormComponent {

  'products': Products;

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
    console.log(e);
    this.products.category = e;
    console.log('id',e);
    this.productsService.save(this.products).subscribe(result => this.gotoProductsList());
  }

  gotoProductsList() {
    console.log('go to product details')
    this.router.navigate(['/products']);
  }
}