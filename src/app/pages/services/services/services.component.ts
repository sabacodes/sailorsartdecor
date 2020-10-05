import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { catchError } from 'rxjs/operators';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: any[];
  acquisitions;
  sales;
  legals;
  curations;
  acqImage;
  salesImage;
  legalImage;
  curImage;
  constructor(private service: UserService, private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.fetchServices()
  }


  fetchServices() {
    this.services = [];
    this.ngxService.start()
    this.service.getServices().pipe(catchError(error => {
      this.ngxService.stop()
      return error;
    })).subscribe(
      res => {
        this.ngxService.stop()
        if (res.success) {
          this.services = res.result;

          this.acquisitions = JSON.parse(this.services[0].serviceData);
          this.sales = JSON.parse(this.services[1].serviceData)
          this.legals = JSON.parse(this.services[2].serviceData)
          this.curations = JSON.parse(this.services[3].serviceData)

          this.acqImage = this.services[0].serviceImage;
          this.salesImage = this.services[1].serviceImage;
          this.legalImage = this.services[2].serviceImage;
          this.curImage = this.services[3].serviceImage;
        }
        else if (res.success === false) {
          alert(res.result.message);
        }
      }
    );
  }
}
