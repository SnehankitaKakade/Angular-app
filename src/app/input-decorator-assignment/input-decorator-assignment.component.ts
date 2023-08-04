import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-decorator-assignment',
  templateUrl: './input-decorator-assignment.component.html',
  styleUrls: ['./input-decorator-assignment.component.css']
})
export class InputDecoratorAssignmentComponent implements OnInit {


  @Input() childcourses :[];
  constructor() { }

  ngOnInit() {
    console.log('Input data from parent :',this.childcourses);
   
  }

}
