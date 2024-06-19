import { Component ,OnInit} from '@angular/core';
import { EmployeeService } from '../employee/employee.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDepartment } from '../employee/department.interface';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrl: './newemployee.component.css',
  providers:[EmployeeService]
})
export class NewemployeeComponent implements OnInit 
{
  Dept:IDepartment[]=[];
  empcreateform:any;
  constructor(private esvr:EmployeeService, private rt:Router)
  {

  }

ngOnInit(): void 
{
  this.empcreateform=new FormGroup({
    empName:new FormControl(null,[Validators.required]),
    address:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
    emailId:new FormControl(null,[Validators.required,Validators.email]),
    mobileNo:new FormControl(null,[Validators.required,Validators.pattern("\\d{10}")]),
    salary:new FormControl(null,[Validators.required,Validators.min(1000),Validators.max(10000)]),
    deptId:new FormControl(0,[Validators.required])
  });

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
}
CreateEmp():void
{
 
  this.esvr.createEmp(this.empcreateform.value).subscribe(
   (data)=>
     {
      alert("Employee Created!");
      this.rt.navigate(['/emp']);
     },
   (err)=>alert("Error!"+JSON.stringify(err))
  );
}
}
