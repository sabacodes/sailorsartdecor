import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  image: any;
  aboutData: any;
  featured: any[] = [];

  constructor(private service: UserService, private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.fetchAboutUs();
    this.fetchFeatured();
  }

  fetchAboutUs() {
    this.ngxService.start();
    this.service.getAbout().pipe(catchError(error => {
      this.ngxService.stop();
      return error;
    })).subscribe(
      res => {
        this.ngxService.stop();
        if (res.success) {
          this.image = res.result[0].image;
          this.aboutData = res.result[0].data

        }
        else if (res.success === false) {
          alert(res.result.message);
        }
      }
    );
  }

  fetchFeatured() {
    this.featured = []
    this.ngxService.start()
    this.service.getFeatured().pipe(catchError(error => {
      this.ngxService.stop()
      return error;
    })).subscribe(
      res => {
        this.ngxService.stop()
        if (res.success) {
          this.featured = res.result.result;
        }
        else if (res.success === false) {
          alert(res.result.message);
        }
      }
    );
  }


}
