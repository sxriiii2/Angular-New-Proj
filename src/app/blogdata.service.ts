import { Injectable } from '@angular/core';
import { Blog } from './blog';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogdataService {
  private blogs: Blog[] = [];
  private blogDataSubject = new BehaviorSubject<Blog[]>([]);

  getBlogs(): Blog[] {
    return this.blogs;
  }

  addBlog(blog: Blog) {
    this.blogs.push(blog);
    this.blogDataSubject.next(this.blogs);
  }

  getBlogData(): Observable<Blog[]> {
    return this.blogDataSubject.asObservable();
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
