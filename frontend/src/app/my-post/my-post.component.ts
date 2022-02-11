import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.css']
})
export class MyPostComponent implements OnInit {

  posts = []
  isCreatePost = false

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(
      'http://127.0.0.1:3000/posts/my/',
      {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }
    ).subscribe((res: any) => {
      console.log(res);
      this.posts = res
    })
  }

  CreatePost() {
    this.isCreatePost = true
  }

  closeWindow(res: boolean) {
    this.isCreatePost = res
    this.ngOnInit()
  }

  updatePost(res: boolean) {
    this.ngOnInit()
  }

}
