import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICustomer } from "./customer.interface";


@Injectable()
export class CustomerService
{
    url:string="https://demoapi.ritechpune.com/api/customerapi";
    constructor(private http:HttpClient)
    {} 
    getAllCustomers():Observable<ICustomer []>
    {
        return this.http.get<ICustomer []>(this.url);
    }
    createToDatabase(rec:ICustomer):Observable<any>
    {
        return this.http.post(this.url,rec,{responseType:'text'});
    }
}