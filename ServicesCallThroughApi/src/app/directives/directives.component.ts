import { Component } from "@angular/core";

@Component({
    selector:"directives",
    templateUrl:"directives.components.html",
    styleUrls:["directives.component.css"]
})
export class Directives
{
    flag1:boolean=true;
    
    val1:number=4;

toggle(): void
{
    this.flag1 =! this.flag1;
//  alert("hello and welcome");
}
}