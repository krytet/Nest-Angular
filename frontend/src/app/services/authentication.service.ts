import { Injectable } from '@angular/core';

@Injectable(
    {providedIn: 'any'}
) 
export class AuthenticationService {

  isAuthenticated = false;

  constructor() { }

  logout() {
    this.isAuthenticated = false;
  }

  logIn() {
    this.isAuthenticated = true;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}