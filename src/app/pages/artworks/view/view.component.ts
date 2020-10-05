import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  artworkData;
  constructor() {
    this.artworkData = JSON.parse(localStorage.getItem('artdata'));

  }

  ngOnInit(): void {
  }

}
