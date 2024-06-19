import { Component,OnInit } from "@angular/core";
import { ICustomer } from "./customer.interface";
import { CustomerService } from "./customer.service";


@Component({
    selector:"custs",
    templateUrl:"customer.component.html",
    providers:[CustomerService]
})
export class CustomerComponent implements OnInit
{
   cust:ICustomer[]=[];
   constructor(private custser:CustomerService){}
   ngOnInit():void
   {
        this.custser.getAllCustomers().subscribe(
            (data)=>{
                alert(JSON.stringify(data));
                this.cust=data;
            },
            (err)=>{
                alert("Error!"+JSON.stringify(err));
            }
        );
   }
}