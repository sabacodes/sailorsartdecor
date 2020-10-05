import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  visibleSidebar1: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigate(route) {
    this.visibleSidebar1 = false
    this.router.navigate([route])
  }
}
