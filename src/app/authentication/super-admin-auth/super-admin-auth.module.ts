import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminAuthRoutingModule } from './super-admin-auth-routing.module';
import { SuperAdminAuthComponent } from './super-admin-auth.component';
import { SuperAdminAuthenticationComponent } from './super-admin-authentication/super-admin-authentication.component';


@NgModule({
  declarations: [
    SuperAdminAuthComponent,
    SuperAdminAuthenticationComponent
  ],
  imports: [
    CommonModule,
    SuperAdminAuthRoutingModule
  ]
})
export class SuperAdminAuthModule { }
