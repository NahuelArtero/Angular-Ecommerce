import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor (
    private fb: FormBuilder, 
    private auth: AuthService,
    private router: Router,
    private snackBar: MatSnackBar ) {
    this.loginForm =  this.fb.group({
      email:["",[Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password:["",[Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
     });
   }
   login(){
     this.auth.authenticated()
     this.snackBar.open('Login successful', 'Close', {
      duration: 3000,
       horizontalPosition:'center'
    }).afterOpened().pipe(
      delay(2000)
    ).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
