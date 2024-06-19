import { Component } from "@angular/core";

@Component({
    selector:"data",
    templateUrl:"databinding.component.html"
})
export class DataBindingEx
{
msg :string="hello message!";
val:number=50;
sayhello():void
{
    alert("say hello called!!!!");
}
Show(val:string):void{
     //alert("value is:"+ val);
this.msg=val;
}
}