import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent {
  opened = false;

  
  constructor(private router:Router){

  }

  logOut() {
    this.router.navigate(['']);
  }
}
