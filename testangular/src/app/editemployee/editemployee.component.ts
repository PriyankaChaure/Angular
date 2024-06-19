import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee/employee.service';
import { FormBuilder } from '@angular/forms';
import { IDepartment } from '../employee/department.interface';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrl: './editemployee.component.css',
  providers:[EmployeeService]
})
export class EditemployeeComponent implements OnInit
{
  Dept:IDepartment[]=[];
empid:any;
empeditfrm:any;
constructor(private art:ActivatedRoute, private esvr:EmployeeService, private fb:FormBuilder,private rt:Router)
{}
ngOnInit(): void 
{
  this.art.paramMap.subscribe(
    (data)=>
      {
        this.empid=data.get('eid');
      },
    (err)=>alert("Error!"+JSON.stringify(err))
  );
 
  this.esvr.getAllDepartments().subscribe
  (
    (data)=>{
        alert(JSON.stringify(data));
        this.Dept=data;
        console.log(this.Dept);
    },
    (err)=>{
        alert("Error!"+JSON.stringify(err));
    }
  );
  this.empeditfrm=this.fb.group({
    empId:[],
    empName:[],
    address:[],
    emailId:[],
    mobileNo:[],
    salary:[],
    deptId:[]
  });

  this.esvr.getById(this.empid).subscribe(
    (data)=>
      {
      //  alert(JSON.stringify(data))
      this.empeditfrm.patchValue(data);
      },
    (err)=>alert("Error!"+JSON.stringify(err))
  );
}
UpdateEmployee():void
{
 this.esvr.modifyEmployee(this.empeditfrm.value).subscribe(
  (data)=>{
    alert("Employee Updated!!!");
    this.rt.navigate(['/emp']);
  },
  (err)=>alert("Error!!"+JSON.stringify(err))
 );
}
}
