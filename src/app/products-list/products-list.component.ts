import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../../../model/products';
import { ProductsService } from '../../../service/products-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

 'products' : Products[];

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private productService: ProductsService) {
  }

  ngOnInit() {
    this.productService.findAll().subscribe(data => {
      this.products = data;
    });
  }

  public delete(productId:string) {
    this.productService.delete(productId).subscribe(result => this.gotoProductsList());
  }

  gotoProductsList() {
    this.router.navigate(['/products']);
  }
}