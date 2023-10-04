import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
  passengers:any[]=[2,3,4,5]

}
