import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { LoginAsUserComponent } from './login-as-user/login-as-user.component';
// import { MaterialModuleModule } from './../material-module/material-module.module'
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    UserComponent,
    LoginAsUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    // MaterialModuleModule,
    MatIconModule
  ]
})
export class UserModule { }
