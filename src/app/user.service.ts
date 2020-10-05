import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment as ENV } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  private options = {
    headers: this.headers,

  }

  constructor(
    private http: HttpClient,
  ) { }
  getArtwork(limit, page): Observable<any> {
    return this.http.get<any>(`${ENV.API_URL}/artworkList?limit=${limit}&page=${page}`, this.options)
      .pipe(
        map((res) => {
          return res;
        }));
  }
  getGallery(): Observable<any> {
    return this.http.get<any>(`${ENV.API_URL}/galleryList`, this.options)
      .pipe(
        map((res) => {
          return res;
        }));
  }

  getServices(): Observable<any> {
    return this.http.get<any>(`${ENV.API_URL}/serviceList`, this.options)
      .pipe(
        map((res) => {
          return res;
        }));
  }
  getAbout(): Observable<any> {
    return this.http.get<any>(`${ENV.API_URL}/aboutUs`, this.options)
      .pipe(
        map((res) => {
          return res;
        }));
  }

  contact(name, email, subject, message): Observable<any> {
    return this.http.post<any>(`${ENV.API_URL}/contactUs`, { name, email, subject, message }, this.options)
      .pipe(
        map((res) => {
          return res;
        }));
  }
  getFeatured(): Observable<any> {
    return this.http.get<any>(`${ENV.API_URL}/featuredList`, this.options)
      .pipe(
        map((res) => {
          return res;
        }));
  }

  getBlogs(limit, page): Observable<any> {
    return this.http.get<any>(`${ENV.API_URL}/blogList?limit=${limit}&page=${page}`, this.options)
      .pipe(
        map((res) => {
          return res;
        }));
  }

  viewBlog(id): Observable<any> {
    return this.http.get<any>(`${ENV.API_URL}/blogView?id=${id}`, this.options)
      .pipe(
        map((res) => {
          return res;
        }));
  }

  blogComments(id): Observable<any> {
    return this.http.get<any>(`${ENV.API_URL}/commentListWeb?blogId=${id}`, this.options)
      .pipe(
        map((res) => {
          return res;
        }));
  }

  comment(blogId, comment, name, email): Observable<any> {
    return this.http.post<any>(`${ENV.API_URL}/addComment`, { blogId, comment, name, email }, this.options)
      .pipe(
        map((res) => {
          return res;
        }));
  }
}