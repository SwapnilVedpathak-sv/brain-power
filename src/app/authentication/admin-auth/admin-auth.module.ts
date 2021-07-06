import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAuthRoutingModule } from './admin-auth-routing.module';
import { AdminAuthComponent } from './admin-auth.component';
import { AdminLoginWithPasswordComponent } from './admin-login-with-password/admin-login-with-password.component';
import { AdminLoginWithOTPComponent } from './admin-login-with-otp/admin-login-with-otp.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';


@NgModule({
  declarations: [
    AdminAuthComponent,
    AdminLoginWithPasswordComponent,
    AdminLoginWithOTPComponent,
    AdminRegisterComponent
  ],
  imports: [
    CommonModule,
    AdminAuthRoutingModule
  ]
})
export class AdminAuthModule { }
