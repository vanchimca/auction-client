import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductsService } from '../../service/products-service.service';
import { BidServiceService } from '../../service/bid-service.service';
import { BidsListComponent } from './bids-list/bids-list.component';
import { BidsFormComponent } from './bids-form/bids-form.component';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars'

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsFormComponent,
    BidsListComponent,
    BidsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    DatePickerModule
  ],
  providers: [ProductsService, BidServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }