import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordpressApiService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost/wordpress/wp-json/wp/v2/posts?_embed', {
      params: {
        per_page: '2'
      }
    });
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost/php_api/api/product/read.php');
  }
  
}
