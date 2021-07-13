import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAsUserComponent } from './login-as-user/login-as-user.component';
import { UserComponent } from './user.component';

const routes: Routes = [{ path: '', component: LoginAsUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
