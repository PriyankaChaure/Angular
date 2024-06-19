import { Component,OnInit } from '@angular/core';
import { Productservice } from '../product/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css',
  providers:[Productservice]
})
export class DeleteProductComponent implements OnInit
{
  productrec:any;
  productid:any;
  constructor(private psvr:Productservice, private art:ActivatedRoute, private rt:Router)
  {}
 ngOnInit(): void {
   this.art.paramMap.subscribe(
    (data)=>
      {
        this.productid=data.get("pid");
      },
    (err)=>alert("Error!!"+JSON.stringify(err))
   );
   this.psvr.getById(this.productid).subscribe(
    (data)=>
      {
        this.productrec=data;
      },
    (err)=>alert("Error!!"+JSON.stringify(err))
   )
 }
 DeleteProduct():void{
 // alert(this.productid);
  this.psvr.removeProduct(this.productid).subscribe(
    (data)=>{
        alert("Product Deleted!!");
        this.rt.navigate(['/prod']);
    },
    (err)=>alert("Error!!"+JSON.stringify(err))
  );
 }
}
