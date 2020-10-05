import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],

})
export class DetailsComponent implements OnInit {
  galleryData;
  activeId;
  constructor() {
    this.galleryData = JSON.parse(localStorage.getItem('galleryData'))
    this.activeId = JSON.parse(localStorage.getItem('activeId'))
  }
  ngOnInit(): void {
  }

}
