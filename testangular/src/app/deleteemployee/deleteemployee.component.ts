import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deleteemployee',
  templateUrl: './deleteemployee.component.html',
  styleUrl: './deleteemployee.component.css',
  providers:[EmployeeService]
})
export class DeleteemployeeComponent implements OnInit
{
  emprec:any;
  empid:any;
  constructor(private esvr:EmployeeService, private art:ActivatedRoute, private rt:Router)
  {}
 ngOnInit(): void {
   this.art.paramMap.subscribe(
    (data)=>
      {
        this.empid=data.get("eid");
      },
    (err)=>alert("Error!!"+JSON.stringify(err))
   );
   this.esvr.getById(this.empid).subscribe(
    (data)=>
      {
        this.emprec=data;
      },
    (err)=>alert("Error!!"+JSON.stringify(err))
   )
 }
 DeleteEmployee():void{
 // alert(this.productid);
  this.esvr.removeEmployee(this.empid).subscribe(
    (data)=>{
        alert("Employee Deleted!!");
        this.rt.navigate(['/emp']);
    },
    (err)=>alert("Error!!"+JSON.stringify(err))
  );
 }
}
