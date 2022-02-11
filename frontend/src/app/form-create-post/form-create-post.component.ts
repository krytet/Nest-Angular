import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-create-post',
  templateUrl: './form-create-post.component.html',
  styleUrls: ['./form-create-post.component.css']
})
export class FormCreatePostComponent implements OnInit {
  @Input('idPost') idPost = ''
  @Input('title') title = ''
  @Input('text') text = ''
  @Input('isEdit') isEdit = false
  @Output('isProcessPost') isProcessPost = new EventEmitter<boolean>()
  statusRes = 0

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  CloseWindow() {
    console.log(this.isProcessPost);
    
    this.isProcessPost.emit(false)
    console.log(this.isProcessPost);
  }

  async CreatePost() {
    this.statusRes = 1
    this.http.post(
      'http://127.0.0.1:3000/posts/',
      {
        'title': this.title,
        'text': this.text,
      },
      {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }
    ).subscribe((res: any) => {
      setTimeout(() => {
        this.CloseWindow()
      }, 3000);
    }, () => {
      this.statusRes = 2
        setTimeout(() => {
        this.CloseWindow()
        this.statusRes = 0
      }, 3000);
    })
  }

  async EditPost() {
    this.statusRes = 1
    this.http.put(
      `http://127.0.0.1:3000/posts/${this.idPost}/`,
      {
        'title': this.title,
        'text': this.text,
      },
      {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }
    ).subscribe((res: any) => {
      this.statusRes = 2
      setTimeout(() => {
        this.CloseWindow()
      }, 3000);
    }, () => {
      this.statusRes = 2
        setTimeout(() => {
        this.CloseWindow()
      }, 3000);
    })
    this.statusRes = 0
  }

}
