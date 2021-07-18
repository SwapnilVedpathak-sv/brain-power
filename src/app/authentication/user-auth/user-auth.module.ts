import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthRoutingModule } from './user-auth-routing.module';
import { UserAuthComponent } from './user-auth.component';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';


@NgModule({
  declarations: [
    UserAuthComponent,
    UserAuthenticationComponent
  ],
  imports: [
    CommonModule,
    UserAuthRoutingModule
  ]
})
export class UserAuthModule { }
