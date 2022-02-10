import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogIn = false

  constructor() { }

  ngOnInit(): void {
    const token = localStorage.getItem('token')
    if (token){
      console.log(('есть'));
      // TODO создать связь и проверка через отправку 
      this.isLogIn = true
    }
  }

  logOut() {
    localStorage.removeItem('token')
    console.log('Delete token');
  }

}
