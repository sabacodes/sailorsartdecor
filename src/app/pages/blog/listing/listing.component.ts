import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  blogs: any[] = [];
  limit = 12;
  page = 1
  collectionSize: any = 0;
  id: any;
  response: any;

  constructor(private service: UserService, private router: Router, private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.fetchBlog()
  }
  fetchBlog() {
    // this.blogs = []
    this.ngxService.start();
    this.service.getBlogs(this.limit, this.page).pipe(catchError(error => {
      this.ngxService.stop();
      return error;
    })).subscribe(
      res => {
        this.ngxService.stop();
        if (res.success) {
          this.blogs = res.result.result;
          this.collectionSize = res.result.totalCount
        }
        else if (res.success === false) {
          alert(res.result.message);
        }
      }
    );
  }

  loadPage($event) {
    this.page = $event;
    this.fetchBlog();
  }

}
