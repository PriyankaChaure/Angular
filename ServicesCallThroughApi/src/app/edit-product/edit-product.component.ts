import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Productservice } from '../product/product.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
  providers:[Productservice]
})
export class EditProductComponent implements OnInit
{
productid:any;
cfrm:any;
constructor(private art:ActivatedRoute, private psvr:Productservice, private fb:FormBuilder,private rt:Router)
{}
ngOnInit(): void {
  this.art.paramMap.subscribe(
    (data)=>
      {
        this.productid=data.get('pid');
      },
    (err)=>alert("Error!"+JSON.stringify(err))
  );
 
  this.cfrm=this.fb.group({
    productID:[],
    productName:[null,Validators.required],
    mfgName:[],
    price:[]
  });

  this.psvr.getById(this.productid).subscribe(
    (data)=>
      {
      //  alert(JSON.stringify(data))
      this.cfrm.patchValue(data);
      },
    (err)=>alert("Error!"+JSON.stringify(err))
  );
  //alert(this.productid);
}
UpdateProduct():void
{
 // console.log(this.cfrm.value);
 this.psvr.modifyProduct(this.cfrm.value).subscribe(
  (data)=>{
    alert("Product Updated!!!");
    this.rt.navigate(['/prod']);
  },
  (err)=>alert("Error!!"+JSON.stringify(err))
 );
}
}
