import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.css'
})
export class PipeExampleComponent 
{
  str:string="This is demo string used for pipes example!";
  num:number=1234;
  val:number=1;
  //dt=new Date(2013,11,31,10,10,10);
  dt =new Date();
}
