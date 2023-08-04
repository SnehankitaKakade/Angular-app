import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';

 // data:string='Angular Batch 7';  //.................pareant
 courses:string[]=['Angular','TypeScript','JavaScript','HTML','SQL','CSS'];


 //step -5
 getDataFromChild(value) {

  console.log(value);   

 }

}
