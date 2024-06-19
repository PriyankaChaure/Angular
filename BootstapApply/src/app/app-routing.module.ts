import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Prachi } from './prachi/prachi.component';
import { CustomerComponent } from './customer/customer.component';
import { DataBindingEx } from './databinding/databinding.component';
import { Directives } from './directives/directives.component';
import { Welcome } from './welcome/welcome.component';
import { Product } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';

const routes: Routes = [
  {path:"prachi",component:Prachi},
  {path:"customer",component:CustomerComponent},
  {path:"newcust",component:NewCustomerComponent},
  {path:"custdetails/:custid/:custname",component:CustomerdetailsComponent},
  {path:"data/bind",component:DataBindingEx},
  {path:"dirs",component:Directives},
  {path:"wel",component:Welcome},
  {path:"prod",component:Product},
  {path:"editprod/:pid",component:EditProductComponent},
  {path:"deleteprod/:pid",component:DeleteProductComponent},
  {path:"pipe",component:PipeExampleComponent},
  {path:"",component:Welcome,pathMatch:"full"},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
