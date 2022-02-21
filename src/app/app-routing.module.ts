import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { BidsListComponent } from './bids-list/bids-list.component';

const routes: Routes = [
  { path: 'products', component: ProductsListComponent },
  { path: 'addproducts', component: ProductsFormComponent },
  { path: 'getBids/:productId', component: BidsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }