import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
  minDate = new Date();
  passengers:any[]=[2,3,4,5]
  myControl: any;
  selected='';

  
  constructor(){

  }

  ngOnInit(){
    
  }
  
  

  states: string[] = [
    'Delhi',
    'Mumbai',
    'Banglore',
    'Patna',
    'Calcutta',
    'Chandigarh',
    'Sagour',
    'Dubai',
    'Florida',
    'Georgia',
    'Banaras',
    'Jammu Kashmir',
    'London',
    'Singapore',
   
    
  ];



}
