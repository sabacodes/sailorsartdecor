import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  artist = {
    "name":"Josh Miller","hometown":"Zhejiang China", "work":"Singapore","desc":`Born in China 1977, Liu Xuan Qi graduated from University of Shanghai for Science and Technology
    press printing and Institute of art
    and design, in 1999. He moved to Singapore in 2006.`
  }
  artworkData: any;
  constructor() {
    this.artworkData = JSON.parse(localStorage.getItem('artdata'));

   }

  ngOnInit(): void {
  }

}
