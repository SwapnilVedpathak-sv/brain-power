import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthRoutingModule } from './user-auth-routing.module';
import { UserAuthComponent } from './user-auth.component';
import { UserLoginWithPasswordComponent } from './user-login-with-password/user-login-with-password.component';
import { UserLoginWithOTPComponent } from './user-login-with-otp/user-login-with-otp.component';
import { UserRegisterComponent } from './user-register/user-register.component';


@NgModule({
  declarations: [
    UserAuthComponent,
    UserLoginWithPasswordComponent,
    UserLoginWithOTPComponent,
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    UserAuthRoutingModule
  ]
})
export class UserAuthModule { }
