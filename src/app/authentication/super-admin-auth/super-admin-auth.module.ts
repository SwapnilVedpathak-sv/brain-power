import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminAuthRoutingModule } from './super-admin-auth-routing.module';
import { SuperAdminAuthComponent } from './super-admin-auth.component';
import { SuperAdminLoginWithPasswordComponent } from './super-admin-login-with-password/super-admin-login-with-password.component';
import { SuperAdminLoginWithOTPComponent } from './super-admin-login-with-otp/super-admin-login-with-otp.component';
import { SuperAdminRegisterComponent } from './super-admin-register/super-admin-register.component';


@NgModule({
  declarations: [
    SuperAdminAuthComponent,
    SuperAdminLoginWithPasswordComponent,
    SuperAdminLoginWithOTPComponent,
    SuperAdminRegisterComponent
  ],
  imports: [
    CommonModule,
    SuperAdminAuthRoutingModule
  ]
})
export class SuperAdminAuthModule { }
