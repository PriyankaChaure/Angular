import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewemployeeComponent } from './newemployee/newemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:"emp",component:EmployeeComponent},
  {path:"empnew",component:NewemployeeComponent},
  {path:"empedit/:eid",component:EditemployeeComponent},
  {path:"empdelete/:eid",component:DeleteemployeeComponent},
  {path:"",redirectTo:"emp",pathMatch:"full"}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
