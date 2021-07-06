import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminAuthComponent } from './super-admin-auth.component';

const routes: Routes = [{ path: '', component: SuperAdminAuthComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminAuthRoutingModule { }
