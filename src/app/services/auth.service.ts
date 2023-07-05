import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState = new BehaviorSubject(localStorage.getItem("login")?true:false)
  constructor() {}
    authenticated(){ 
      this.authState.next(true)
      localStorage.setItem("login","true")
    }
    logout(){
      this.authState.next(false)
      localStorage.removeItem("login")
    }
    isAuthenticated(){
      return this.authState
    }

    // value to guard
    isAuthenticatedValue(){
      return this.authState.value
    }
}
