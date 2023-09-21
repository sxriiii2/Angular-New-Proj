import { Component, OnInit } from '@angular/core';
import { BlogdataService } from '../blogdata.service';
import { Blog } from '../blog';

@Component({
  selector: 'app-postblog',
  templateUrl: './postblog.component.html',
  styleUrls: ['./postblog.component.css'],
})
export class PostblogComponent implements OnInit {
  blog = { title: '', content: '' };

  constructor(private blogDataService: BlogdataService) {}

  ngOnInit() {}

  postBlog() {
    if (this.blog.title.trim() !== '' && this.blog.content.trim() !== '') {
      // Create a new blog object
      const newBlog: Blog = {
        title: this.blog.title,
        content: this.blog.content,
        likes: 0,        // Initialize likes to 0
        dislikes: 0,     // Initialize dislikes to 0
        comments: []
      };
  
      // Call the service to add the blog post
      this.blogDataService.addBlog(newBlog);
  
      // Clear the input fields after posting
      this.blog = { title: '', content: '' };
    }
  }
}  