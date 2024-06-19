import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProduct } from "./product.interface";
import { Observable } from "rxjs";

@Injectable()
export class Productservice
{
   // url:string="https://demoapi.ritechpune.com/api/productapi";
    url:string="http://localhost:5144/api/ProductAPI";
    constructor(private http:HttpClient)
    {} 
    getAllProducts():Observable<IProduct[]>
    {
        return this.http.get<IProduct []>(this.url);
        // return [
        //     {ProductId:1,ProductName:"Mouse",MfgName:"Intex",Price:980,Rating:3},
        //     {ProductId:2,ProductName:"Computer",MfgName:"Dell",Price:2580,Rating:4},
        //     {ProductId:3,ProductName:"Laptop",MfgName:"Hp",Price:4580,Rating:5},
        //     {ProductId:4,ProductName:"Motherboard",MfgName:"Intel",Price:2980,Rating:2},
        //     {ProductId:5,ProductName:"Keyboard",MfgName:"Cisco",Price:580,Rating:1},
        // ];
    }
    getById(pid:number):Observable<IProduct>
    {
        return this.http.get<IProduct>(this.url+"/"+pid);
    }
    modifyProduct(rec:IProduct):Observable<any>
    {
        alert(JSON.stringify(rec));
        return this.http.put(this.url,rec,{responseType:"text"});
    }
    removeProduct(pid:number):Observable<any>
    {
        return this.http.delete(this.url+"/"+pid,{responseType:"text"});
    }
}