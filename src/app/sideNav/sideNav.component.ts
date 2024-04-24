import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './sideNav.component.html',
  styleUrls: ['./sideNav.component.scss'],
})
export class sideNavComponent implements OnInit {
  opened = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  logOut() {
    this.router.navigate(['']);
  }
}
