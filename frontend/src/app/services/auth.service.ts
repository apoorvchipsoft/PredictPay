import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = signal(true); // Set to true for demo

  isLoggedIn() {
    return this.loggedIn();
  }

  login() {
    this.loggedIn.set(true);
  }

  logout() {
    this.loggedIn.set(false);
  }
}