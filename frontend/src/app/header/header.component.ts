import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogIn = false

  constructor(private router: Router,
              private authService: AuthenticationService,
              ) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token')
    if (token){
      this.isLogIn = true
      this.authService.logIn()
    }
  }

  logOut() {
    localStorage.removeItem('token')
    console.log('Delete token')
    this.isLogIn = false
    this.authService.logout()
    this.router.navigate([''])
  }

  checkLogIn() {
    if (!this.isLogIn) {
      this.isLogIn = this.authService.getIsAuthenticated()
    }
  }

}
