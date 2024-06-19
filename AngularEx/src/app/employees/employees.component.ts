import { Component,OnInit } from '@angular/core';
import { IEmployee } from './employees.interface';
import { EmployeeService } from './employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements OnInit
{
Emp:IEmployee[]=[];
constructor(private esvr:EmployeeService)
{}
ngOnInit():void
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
