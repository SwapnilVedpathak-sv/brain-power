import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './../../../Services/auth.service';
import Swal from 'sweetalert2';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-authentication',
  templateUrl: './admin-authentication.component.html',
  styleUrls: ['./admin-authentication.component.scss']
})
export class AdminAuthenticationComponent implements OnInit {

  signUpForm: any = FormGroup;
  signInForm: any = FormGroup;
  signInAdminCollection: any;

  @ViewChild('container', { read: ElementRef, static: false }) container!: ElementRef;


  constructor(public auth: AuthService, private router: Router) {
    this.signUpForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });

    this.signInForm = new FormGroup({
      // email: new FormControl(null, Validators.email),
      loginUsername: new FormControl(null, Validators.required),
      loginPassword: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
  }

  actionButton() {
    this.container.nativeElement.classList.add('sign-up-mode')
  }

  removeClass() {
    this.container.nativeElement.classList.remove('sign-up-mode')
  }


  signUp() {
    console.log(this.signUpForm.value);
    if (this.signUpForm.valid) {
      this.auth.signUpUser(this.signUpForm.value)
        .pipe(first())
        .subscribe(data => {
          console.log("Ran", data);
          Swal.fire({
            title: "User Registered Successfully !",
            text: "Please Login With Same E-mail",
            icon: "success",
          })
          this.signUpForm.reset();
        },
          error => {
            console.log("error", error.error.error);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${error.error.error}`
            })
          });
    }
  }


  signIn() {
    console.log(this.signInForm.value);
    if (this.signInForm.valid) {
      this.auth.signInAdmin(this.signInForm.value)
        .pipe(first())
        .subscribe(data => {
          this.signInAdminCollection = data;
          localStorage.setItem("token", this.signInAdminCollection.token.toString())
          Swal.fire({
            text: 'Login Successful !!',
            timer: 1000,
          })
          this.router.navigate(['product']);
        },
          error => {
            console.log(error);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${error.error.error}`
            })
          });
    }
  }
}
