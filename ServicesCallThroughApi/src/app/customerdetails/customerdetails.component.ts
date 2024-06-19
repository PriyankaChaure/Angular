import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrl: './customerdetails.component.css'
})
export class CustomerdetailsComponent implements OnInit
{
  custid:any;
  custname:any;
  
  constructor(private custdetail:ActivatedRoute)
  {}
  ngOnInit():void{
    this.custdetail.paramMap.subscribe(
      (data)=>{
          this.custid=data.get("custid");
          this.custname=data.get("custname");
      },
      (err)=>alert("Error!"+JSON.stringify(err))
    );
  }
}
