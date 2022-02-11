import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

interface Post {
  _id: string
  // TODO настроить под object
  author: string
  title: string
  text: string
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input('post') post!: Post;
  @Input('isAuthor') isAuthor = false;
  @Output('isUpdate') isUpdate = new EventEmitter<boolean>()

  isEdit = false
  isDelete = false
  procDelete = 0

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  EditPost() {
    this.isEdit = true
  }

  DeletePost() {
    this.isDelete = true
    this.procDelete = 1
    this.http.delete(
      `http://127.0.0.1:3000/posts/${this.post._id}/`,
      {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }
    ).subscribe(
      (res: any) => {
        this.procDelete = 2
        setTimeout(() => {
          this.isDelete = false
          this.isUpdate.emit(true)
        }, 3000);
      }
    )
    this.procDelete = 0
  }

  closeWindow(res: boolean) {
    this.isEdit = res
    this.isUpdate.emit(true)
  }

}
