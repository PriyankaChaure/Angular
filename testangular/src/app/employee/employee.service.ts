import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IEmployee } from "./employee.interface";
import { Injectable } from "@angular/core";
import { IDepartment } from "./department.interface";
@Injectable()
export  class EmployeeService
{
    url:string="http://localhost:5154/api/empapi";
    url1:string="http://localhost:5154/api/deptapi";
    constructor(private http:HttpClient)
    {

    }
    getById(eid:number):Observable<IEmployee>
    {
        return this.http.get<IEmployee>(this.url+"/"+eid);
    }
    getAllEmployees():Observable<IEmployee []>
    {
        return this.http.get<IEmployee []>(this.url);
    }
    getAllDepartments():Observable<IDepartment []>
    {
        return this.http.get<IDepartment []>(this.url1);
    }
    createEmp(rec:IEmployee):Observable<any>
    {
        return this.http.post(this.url,rec,{responseType:'text'});
    }
    modifyEmployee(rec:IEmployee):Observable<any>
    {
        alert(JSON.stringify(rec));
        return this.http.put(this.url,rec,{responseType:"text"});
    }
    removeEmployee(eid:number):Observable<any>
    {
        return this.http.delete(this.url+"/"+eid,{responseType:"text"});
    }
}