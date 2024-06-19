import { Component,OnInit} from "@angular/core";
import { IProduct } from "./product.interface";
import { Productservice } from "./product.service";

@Component({
    selector:'product',
     /* styles:['thead {background-color:red;color:white;} tbody {background-color:skyblue;color:white;}'] */
    styleUrl:'prduct.component.css',
    templateUrl:'product.component.html',
    providers:[Productservice]
})
export class Product implements OnInit
{
    flag:boolean=false;
    title:string="All New Products!";
    quantity:number=20;
    price:number=5;
    Prods:IProduct[]=[];
    
    ngOnInit():void
    {
        
        this.Prodserv.getAllProducts().subscribe(
            (data)=>{
                alert(JSON.stringify(data));
                this.Prods=data;
            },
            (err)=>{
                alert("Error!"+JSON.stringify(err));
            }
        );
        // this.Prods=[
        //     {ProductId:1,ProductName:"Mouse",MfgName:"Intex",Price:980,Rating:3},
        //     {ProductId:2,ProductName:"Computer",MfgName:"Dell",Price:2580,Rating:4},
        //     {ProductId:3,ProductName:"Laptop",MfgName:"Hp",Price:4580,Rating:5},
        //     {ProductId:4,ProductName:"Motherboard",MfgName:"Intel",Price:2980,Rating:2},
        //     {ProductId:5,ProductName:"Keyboard",MfgName:"Cisco",Price:580,Rating:1},
        // ];

    }
    constructor( private Prodserv:Productservice)
    {
        // this.Prods=[
        //     {ProductId:1,ProductName:"Mouse",MfgName:"Intex",Price:980,Rating:3},
        //     {ProductId:2,ProductName:"Computer",MfgName:"Dell",Price:2580,Rating:4},
        //     {ProductId:3,ProductName:"Laptop",MfgName:"Hp",Price:4580,Rating:5},
        //     {ProductId:4,ProductName:"Motherboard",MfgName:"Intel",Price:2980,Rating:2},
        //     {ProductId:5,ProductName:"Keyboard",MfgName:"Cisco",Price:580,Rating:1},
        // ];
    }
    SayHello():string
    {
        return "say hello called!!";
    }
    toggle():void{
        this.flag =! this.flag;
    }
}