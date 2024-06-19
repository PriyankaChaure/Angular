import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Prachi } from './prachi/prachi.component';
import { Welcome } from './welcome/welcome.component';
import { Product } from './product/product.component';
import { Directives } from './directives/directives.component';
import { DataBindingEx } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './product/star.component';


@NgModule({
  declarations: [
    AppComponent,
    Prachi,
    Welcome,
    Product,
    Directives,
    DataBindingEx,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule
  ],
  providers: [],
  bootstrap: [Product]
})
export class AppModule { }
