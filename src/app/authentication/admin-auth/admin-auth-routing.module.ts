import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthComponent } from './admin-auth.component';
import { AdminAuthenticationComponent } from './admin-authentication/admin-authentication.component';

const routes: Routes = [{ path: '', component: AdminAuthenticationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAuthRoutingModule { }
