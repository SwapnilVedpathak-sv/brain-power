import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthComponent } from './user-auth.component';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';

const routes: Routes = [{ path: '', component: UserAuthenticationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAuthRoutingModule { }
