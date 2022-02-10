import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  SignUpForm = {
    username: 'Myxail.pupkin',
    email: 'exemle@examle.ru',
    firstName: 'Examle',
    lastName: 'Examlov',
    password: 'MPGoTo123',
    retryPassword: 'MPGoTo123'
  }
  isLoading = false
  isErorr = false

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  signUp() {
    this.isLoading = true
    console.log('start register')
    if (this.SignUpForm.password != this.SignUpForm.retryPassword) {
      console.error('Password not uniqued');
      this.isErorr = true
      return;
    }
    const response = this.http.post(
      'http://127.0.0.1:3000/users',
      {
        'username': this.SignUpForm.username,
        'email': this.SignUpForm.email,
        'firstName': this.SignUpForm.firstName,
        'lastName': this.SignUpForm.lastName,
        'password': this.SignUpForm.password
      }
    ).subscribe( (res: any) => {
      console.log('OK register');
      this.router.navigate(['login'])
    }, ((erro: any) => {
      console.error('Eror Registrations');
      this.isErorr = true
    }))
    this.isLoading = false
  }

}
