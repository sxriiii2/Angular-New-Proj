// src/app/storeblog.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Blog } from './blog'; // Import the Blog type

@Injectable({
  providedIn: 'root'
})
export class StoreBlogService {
  private blogs: Blog[] = [];
  private blogsSubject = new BehaviorSubject<Blog[]>([]);

  getBlogs() {
    return this.blogs;
  }

  getBlogs$() {
    return this.blogsSubject.asObservable();
  }

  addBlog(blog: Blog) {
    this.blogs.push({ ...blog, likes: 0, dislikes: 0, comments: [] });
    this.blogsSubject.next(this.blogs);
  }

  like(blogIndex: number) {
    this.blogs[blogIndex].likes++;
  }

  dislike(blogIndex: number) {
    this.blogs[blogIndex].dislikes++;
  }

  addComment(blogIndex: number, comment: string) {
    this.blogs[blogIndex].comments.push(comment);
  }
}
