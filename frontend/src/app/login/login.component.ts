import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any = {
    username: 'Myxail.pupkin',
    password: 'MPGoTo123'
  }
  isLoading = false
  isErorr = false

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }


  signIn() {
    this.isLoading = true
    const response = this.http.post(
      'http://127.0.0.1:3000/auth/login',
      {
        'username': this.loginForm.username,
        'password': this.loginForm.password
      }
    ).subscribe((res: any) => {
      localStorage.setItem('token', res.access_token)
      this.router.navigate(['profile'])
    }, ((res: any)=> {
      console.error('Не Удолось войти');
      this.isErorr = true
    }))
    this.isLoading = false
  }
}
