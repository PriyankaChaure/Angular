import { HttpClient } from "@angular/common/http";
import { IEmployee } from "./employees.interface";
import { Observable } from "rxjs";

export  class EmployeeService
{
    url:string="http://localhost:5154/api/empapi";
    constructor(private http:HttpClient)
    {

    }
    getAllEmployees():Observable<IEmployee []>
    {
        return this.http.get<IEmployee []>(this.url);
    }
}