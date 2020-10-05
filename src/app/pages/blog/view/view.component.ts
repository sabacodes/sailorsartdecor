import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserService } from 'src/app/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  blogData;
  id;
  comments: any;
  totalComments: any;
  commentForm: FormGroup;
  submitted;
  constructor(private service: UserService, private route: ActivatedRoute, private ngxService: NgxUiLoaderService, private fb: FormBuilder) {

    this.route.queryParams.subscribe(params => {
      this.id = params.id;
    })
  }


  get f() {
    return this.commentForm.controls;
  }

  ngOnInit(): void {
    this.commentForm = this.fb.group({
      comment: ["", Validators.required],
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.pattern(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/)]]
    })
    this.fetchBlog();
    this.fetchBlogComments();
  }


  fetchBlog() {
    this.ngxService.start();
    this.service.viewBlog(this.id).pipe(catchError(error => {
      this.ngxService.stop();
      return error;
    })).subscribe(
      res => {
        this.ngxService.stop();
        if (res.success) {
          this.blogData = res.result[0];
        }
        else if (res.success === false) {
          alert(res.result.message);
        }
      }
    );
  }

  fetchBlogComments() {
    this.ngxService.start();
    this.service.blogComments(this.id).pipe(catchError(error => {
      this.ngxService.stop();
      return error;
    })).subscribe(
      res => {
        this.ngxService.stop();
        if (res.success) {
          this.comments = res.result;
          this.totalComments = res.result.length;
        }
        else if (res.success === false) {
          alert(res.result.message);
        }
      }
    );
  }


  doComment() {
    this.submitted = true
    if (this.commentForm.valid) {

      this.ngxService.start();
      this.service.comment(this.id, this.f.comment.value, this.f.name.value, this.f.email.value).pipe(catchError(error => {
        this.ngxService.stop();
        return error;
      })).subscribe(
        res => {
          this.ngxService.stop();
          if (res.success) {
            this.commentForm.reset();
            this.submitted = false;
            this.fetchBlogComments()
          }
          else if (res.success === false) {
            alert(res.result.message);
          }
        }
      );
    }
  }
}
