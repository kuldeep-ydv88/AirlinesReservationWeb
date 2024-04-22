import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showNavbar = true;
  showToolbar = true;
  loggedIn = false;
  userType: string = '';


  constructor(public router:Router){

  }


  ngOnInit(){

  }

}
