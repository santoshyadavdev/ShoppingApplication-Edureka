
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post/post.service';
import { Post } from '../../service/post/post';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.postService.getPosts().subscribe((data) =>
    //   this.posts = data,
    //   (err) => console.log(err.message));
    //this.route.data.subscribe((result) => this.posts = result['postDataList']);
    this.postService.getPostsData().subscribe((event) => {
      if (event.type === HttpEventType.DownloadProgress) {
        console.log(event.loaded);
        console.log(event.total);
      }
      else if (event instanceof HttpResponse) {
        console.log(event.body);
      }
    }); // use this method when you have large data and want to show progress.
  }

}
