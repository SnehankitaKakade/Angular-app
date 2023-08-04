import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demodatabinding',
  templateUrl: './demodatabinding.component.html',
  styleUrls: ['./demodatabinding.component.css']
})
export class DemodatabindingComponent implements OnInit {

  name:string='Jack';
  imageURL : string = 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=';

  isDisabled = false;



  data = {
    id:'101',
    name:'Harray'
  }
  department: string = 'Support';
  constructor() { }

  ngOnInit() {
  }

saveData(){
  alert("Button Clicked");
}

}
