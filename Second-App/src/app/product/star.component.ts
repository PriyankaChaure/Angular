import { Component,Input } from "@angular/core";

@Component({
    selector:"star",
    templateUrl:"star.component.html"
})
export class StarComponent
{
    @Input()
    noOfStars=0;
} 