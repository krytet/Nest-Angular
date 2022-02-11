import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:3000/posts/').subscribe(
      (res: any) => {
        this.posts = res
      }
    )
  }

}
