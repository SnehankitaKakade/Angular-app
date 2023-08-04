
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  template:`<h1>This is Inline Template</h1>`,   // `` for multiple code & ''for single line code
  //templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {

  constructor() { }
 
  ngOnInit() {
  }

}