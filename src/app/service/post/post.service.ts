import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Post } from './post';

import { APP_CONFIG } from '../appconfig/appconfig.service';
import { IAppConfig } from '../appconfig/Iapp.config';

@Injectable()
export class PostService {

  constructor(private httpService: HttpClient, @Inject(APP_CONFIG) private config: IAppConfig) { }

  getPosts() {
    // return this.httpService.get<Post[]>('http://jsonplaceholder.typicode.com/posts',
    //   { headers: new HttpHeaders().set('token', 'thisistoken').set('anothertoken', 'newtoken') });
    return this.httpService.get<Post[]>(this.config.apiEndPoint + 'posts');
  }

  addPost(post: Post) {
    // return this.httpService.post('http://jsonplaceholder.typicode.com/posts', post);
    return this.httpService.post(this.config.apiEndPoint + 'posts', post);
  }

  getPostsData() {
    // return this.httpService.get<Post[]>('http://jsonplaceholder.typicode.com/posts',
    //   { headers: new HttpHeaders().set('token', 'thisistoken').set('anothertoken', 'newtoken') });
    const request = new HttpRequest('GET', this.config.apiEndPoint + 'posts', { reportProgress: true });
    return this.httpService.request(request); // use this method when you have large data and want to show progress.
    //return this.httpService.get<Post[]>(this.config.apiEndPoint + 'posts', { reportProgress: true });
  }

}
