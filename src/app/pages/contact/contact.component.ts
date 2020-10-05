import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserService } from 'src/app/user.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  readonly: boolean;
  contactForm: FormGroup;
  submitted: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router, private formbuilder: FormBuilder, private ngxService: NgxUiLoaderService, private service: UserService) {

    this.contactForm = this.formbuilder.group({
      name: ["", [Validators.required, Validators.maxLength(50)]],
      email: ["", [Validators.required, Validators.maxLength(100), Validators.pattern(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/)]],
      subject: ["", [Validators.required, Validators.maxLength(200)]],
      message: ["", [Validators.required, Validators.maxLength(1000)]],
    })
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.subject == undefined) {
        this.readonly = false
      } else {
        this.readonly = true;
        this.contactForm.patchValue({
          subject: params.subject
        })
      }
    });
  }


  get f() {
    return this.contactForm.controls;
  }


  submit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      this.ngxService.start()

      this.service.contact(this.f.name.value, this.f.email.value, this.f.subject.value, this.f.message.value).pipe(catchError(error => {
        this.ngxService.stop()
        return error;
      })).subscribe(
        res => {
          this.ngxService.stop()
          if (res.success) {
            alert("Contact Request Sent Successfully.");
            this.router.navigate(['/'])
          }
          else if (res.success === false) {
            alert(res.result.message)
          }
        }
      );
    }
  }

  
}
