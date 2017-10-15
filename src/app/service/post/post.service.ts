import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './post';

@Injectable()
export class PostService {

  constructor(private httpService: HttpClient) { }

  getPosts() {
    // return this.httpService.get<Post[]>('http://jsonplaceholder.typicode.com/posts',
    //   { headers: new HttpHeaders().set('token', 'thisistoken').set('anothertoken', 'newtoken') });

      return this.httpService.get<Post[]>('http://jsonplaceholder.typicode.com/posts');
  }

  addPost(post: Post) {
    return this.httpService.post('http://jsonplaceholder.typicode.com/posts', post);
  }

}
