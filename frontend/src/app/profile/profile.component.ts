import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private http: HttpClient) { }
  profileInfo = {
    'username': String,
    'email': String,
    'firstName': String,
    'lastName': String,
    'isStaf': Boolean,
  }
  //profileInfo = {}

  ngOnInit(): void {
    this.http.get(
      'http://127.0.0.1:3000/auth/profile',
      {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }
    ).subscribe((res: any) => {
      console.log(res);
      this.profileInfo.username = res.username
      this.profileInfo.email = res.email
      this.profileInfo.firstName = res.firstName
      this.profileInfo.lastName = res.lastName
      this.profileInfo.isStaf = res.isStaf
      //this.profileInfo = res
      
    })
  }

}
