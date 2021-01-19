import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  // list = ["gallery__item gallery__item--1", "gallery__item gallery__item--2", "gallery__item gallery__item--3",
  //  "gallery__item gallery__item--4", "gallery__item gallery__item--5", "gallery__item gallery__item--6",
  //   "gallery__item gallery__item--7", "gallery__item gallery__item--8"]
  gallery: any[];

  products=[{image:"assets/images/png/1.png"}, {name:'tab'}, {name:'tab'}]
  
  constructor(private service: UserService, private router: Router, private ngxService: NgxUiLoaderService) {

  }

  ngOnInit(): void {

    this.fetchGallery()
  }
  fetchGallery() {
    this.gallery = []
    this.ngxService.start();
    this.service.getGallery().pipe(catchError(error => {
      this.ngxService.stop()
      return error;
    })).subscribe(
      res => {
        if (res.success) {
          this.ngxService.stop()
          this.gallery = res.result.result;
        }
        else if (res.success === false) {
          this.ngxService.stop()
          alert(res.result.message);
        }
      }
    );
  }

  view(id) {
    localStorage.setItem('activeId', id)
    localStorage.setItem('galleryData', JSON.stringify(this.gallery));
    this.router.navigate(['/details'])
  }
}
