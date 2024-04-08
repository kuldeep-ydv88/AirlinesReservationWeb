import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.scss']
})
export class SearchFlightComponent implements OnInit{  
  selected = 'option1';
  passengers='option1';

  constructor(){

  }


  ngOnInit(){
    
  }

}
