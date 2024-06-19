import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Prachi } from './prachi/prachi.component';
import { Welcome } from './welcome/welcome.component';
import { Product } from './product/product.component';
import { Directives } from './directives/directives.component';
import { DataBindingEx } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { StarComponent } from './product/star.component';
import { CustomerComponent } from './customer/customer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';


@NgModule({
  declarations: [
    AppComponent,
    Prachi,
    Welcome,
    Product,
    Directives,
    DataBindingEx,
    StarComponent,
    CustomerComponent,
    NotFoundComponent,
    CustomerdetailsComponent,
    NewCustomerComponent,
    EditProductComponent,
    DeleteProductComponent,
    PipeExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
   ReactiveFormsModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
