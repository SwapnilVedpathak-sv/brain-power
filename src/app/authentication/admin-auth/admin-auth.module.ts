import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAuthRoutingModule } from './admin-auth-routing.module';
import { AdminAuthComponent } from './admin-auth.component';
import { AdminAuthenticationComponent } from './admin-authentication/admin-authentication.component';
import { MaterialModuleModule } from './../../material-module/material-module.module'


@NgModule({
  declarations: [
    AdminAuthComponent,
    AdminAuthenticationComponent
  ],
  imports: [
    CommonModule,
    AdminAuthRoutingModule,
    MaterialModuleModule
  ]
})
export class AdminAuthModule { }
