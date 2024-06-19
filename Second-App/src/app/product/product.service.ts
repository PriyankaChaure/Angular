import { IProduct } from "./product.interface";

export class Productservice
{
    getAllProducts():IProduct[]
    {
        return [
            {ProductId:1,ProductName:"Mouse",MfgName:"Intex",Price:980,Rating:3},
            {ProductId:2,ProductName:"Computer",MfgName:"Dell",Price:2580,Rating:4},
            {ProductId:3,ProductName:"Laptop",MfgName:"Hp",Price:4580,Rating:5},
            {ProductId:4,ProductName:"Motherboard",MfgName:"Intel",Price:2980,Rating:2},
            {ProductId:5,ProductName:"Keyboard",MfgName:"Cisco",Price:580,Rating:1},
        ];
    }
}