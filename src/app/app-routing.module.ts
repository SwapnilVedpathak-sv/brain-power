import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'userModule', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'adminModule', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'superAdminModule', loadChildren: () => import('./super-admin/super-admin.module').then(m => m.SuperAdminModule) },
  { path: 'userAuth', loadChildren: () => import('./authentication/user-auth/user-auth.module').then(m => m.UserAuthModule) },
  { path: 'adminAuth', loadChildren: () => import('./authentication/admin-auth/admin-auth.module').then(m => m.AdminAuthModule) },
  { path: 'superAdminAuth', loadChildren: () => import('./authentication/super-admin-auth/super-admin-auth.module').then(m => m.SuperAdminAuthModule) },
  { path: '', loadChildren: () => import('./initial-load/initial-load.module').then(m => m.InitialLoadModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
