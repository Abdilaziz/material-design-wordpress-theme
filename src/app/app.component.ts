import { Component } from '@angular/core';
import { WordpressApiService } from './wordpress-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-design-wordpress-theme';

  posts$: Observable<any[]>;

  constructor(private wp: WordpressApiService) {
    this.posts$ = this.wp.getPosts();
  }

}
