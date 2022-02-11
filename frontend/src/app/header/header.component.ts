import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogIn = false

  constructor(private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token')
    if (token){
      this.isLogIn = true
    }
  }

  logOut() {
    localStorage.removeItem('token')
    console.log('Delete token');
    this.isLogIn = false
    this.router.navigate([''])
  }

}
