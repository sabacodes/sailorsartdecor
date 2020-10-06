import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  visibleSidebar1: boolean = false;
  // closeResult: string;

  constructor(private router: Router) { }

  // openVerticallyCentered(content) {
  //   this.modalService.open(content, { centered: true });
  // }

  ngOnInit(): void {
  }
  navigate(route) {
    this.visibleSidebar1 = false
    this.router.navigate([route])
  }
}
