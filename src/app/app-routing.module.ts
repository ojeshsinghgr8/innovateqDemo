import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/**
 * Name: App Routing MOdule
 * Desc: This module handle all the lazy loaded modules
 * HomeModule and User-management Module. Child routing is handled in respective modules.
 * **/
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./user-managment/user-managment.module').then(
        (m) => m.UserManagmentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
