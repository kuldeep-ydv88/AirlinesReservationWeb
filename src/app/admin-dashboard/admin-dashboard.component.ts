import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
 
})
export class AdminDashboardComponent implements OnInit{

  constructor(
    private router:Router
  ){}

  ngOnInit(){
    
  }

 
  
 
  
}
