import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  myForm: FormGroup;

  constructor ( 
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar ) {
   this.myForm =  this.fb.group({
      name: ["",[Validators.required]],
      lastname: [''],
      phone: [''],
      email:["",[Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password:["",[Validators.required,Validators.minLength(6),Validators.maxLength(12)]]
    });
  }
  register(){
    this.snackBar.open('Registration successful', 'Close', {
      duration: 3000
    }).afterOpened().pipe(
      delay(3000)
    ).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

}
