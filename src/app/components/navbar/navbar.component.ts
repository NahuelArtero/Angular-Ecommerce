import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLogin = true;
  constructor(private auth: AuthService ){
    this.auth.isAuthenticated()
    .subscribe(value=>{
      this.isLogin = value
    })
  }
  logout(){
    this.auth.logout()
  }

}
