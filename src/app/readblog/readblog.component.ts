import { Component, OnInit } from '@angular/core';
import { BlogdataService } from '../blogdata.service';
import { Blog } from '../blog';

@Component({
  selector: 'app-readblog',
  templateUrl: './readblog.component.html',
  styleUrls: ['./readblog.component.css']
})
export class ReadblogComponent implements OnInit {
  blogs: Blog[] = [];
  comment: string = '';

  constructor(private blogDataService: BlogdataService) { }

  ngOnInit() {
    // Subscribe to the blog data service to get updates when a new blog is added
    this.blogDataService.getBlogData().subscribe(data => {
      if (data) {
        this.blogs = data; // Update the entire array of blogs
      }
    });
  }

  like(blog: Blog) {
    blog.likes++; // Increment likes directly on the blog object
  }

  dislike(blog: Blog) {
    blog.dislikes++; // Increment dislikes directly on the blog object
  }

  postComment(blog: Blog) {
    if (this.comment.trim() !== '') {
      // Add the comment to the blog's comments array
      blog.comments.push(this.comment);
      this.comment = '';
    }
  }
}
