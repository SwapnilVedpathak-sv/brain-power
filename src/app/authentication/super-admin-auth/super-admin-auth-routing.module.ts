import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminAuthComponent } from './super-admin-auth.component';
import { SuperAdminAuthenticationComponent } from './super-admin-authentication/super-admin-authentication.component';

const routes: Routes = [{ path: '', component: SuperAdminAuthenticationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminAuthRoutingModule { }
