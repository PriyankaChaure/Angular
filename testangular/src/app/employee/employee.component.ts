import { Component,OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from './employee.interface';
import { IDepartment } from './department.interface';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit
{
  Emp:IEmployee[]=[];
  Dept:IDepartment[]=[];
  constructor(private esvr:EmployeeService)
  {} 
ngOnInit(): void
{
  this.esvr.getAllEmployees().subscribe(
    (data)=>{
        alert(JSON.stringify(data));
        this.Emp=data;
    },
    (err)=>{
        alert("Error!"+JSON.stringify(err));
    }
);
}
}
