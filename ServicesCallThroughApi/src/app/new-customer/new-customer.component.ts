import { Component,OnInit} from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { CustomerService } from '../customer/customer.service';
import { Route,Router } from '@angular/router';
@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.css',
  providers:[CustomerService]
})
export class NewCustomerComponent implements OnInit 
{
    custform:any;
    constructor(private c:CustomerService, private rt:Router)
    {

    }
    ngOnInit(): void {
      this.custform=new FormGroup({
        customerName:new FormControl(null,[Validators.required]),
        address:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
        emailID:new FormControl(null,[Validators.required,Validators.email]),
        mobileNo:new FormControl(null,[Validators.required,Validators.pattern("\\d{10}")]),
        creditLimit:new FormControl(null,[Validators.required,Validators.min(1000),Validators.max(10000)])
      });
    }
    CreateCust():void{
       // console.log(this.custform.value);
       this.c.createToDatabase(this.custform.value).subscribe(
        (data)=>
          {
           // alert(JSON.stringify(data))
           alert("Customer Created!");
           this.rt.navigate(['/customer']);
          },
        (err)=>alert("Error!"+JSON.stringify(err))
       );
        
     
    }
}
