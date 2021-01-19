import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { catchError } from 'rxjs/operators';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.scss']
})
export class ArtworksComponent implements OnInit {
  val3: number = 5;

  artworks = [
    {
      "title": `And there you wish you wish away 2`, "painterName": "Luca Brandi", "painterPlace": `Italy`
    },
    {
      "title": `And there you wish you wish away 2`, "painterName": "Luca Brandi", "painterPlace": `Italy`
    },
    {
      "title": `And there you wish you wish away 2`, "painterName": "Luca Brandi", "painterPlace": `Italy`
    },
    {
      "title": `And there you wish you wish away 2`, "painterName": "Luca Brandi", "painterPlace": `Italy`
    },
    {
      "title": `And there you wish you wish away 2`, "painterName": "Luca Brandi", "painterPlace": `Italy`
    }
  ]
  limit = 12;
  page = 1
  collectionSize: any;

  products = [
    {
      "title": `Ancient Compass`, "price": `Rs. 250`
    },
    {
      "title": `Wall Clock`, "price": `Rs. 330`
    },
    {
      "title": `Pocket Watch`, "price":`Rs. 100`
    }
  ]
  constructor(private service: UserService, private ngxService: NgxUiLoaderService, private router: Router) { }

  ngOnInit(): void {
    this.fetchArtwork()
  }

  fetchArtwork() {
    this.artworks = []
    this.ngxService.start();
    this.service.getArtwork(this.limit, this.page).pipe(catchError(error => {
      this.ngxService.stop();
      return error;
    })).subscribe(
      res => {
        this.ngxService.stop();
        if (res.success) {
          this.artworks = res.result.result;
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
    this.fetchArtwork();
  }

  viewArtwork(data) {
    localStorage.setItem('artdata', JSON.stringify(data));
    this.router.navigate(['/artworks/view'])
  }
}
