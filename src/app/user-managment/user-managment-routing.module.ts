import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContainerComponent } from './container/main-container/main-container.component';
import { CardComponent } from './view/card/card.component';
import { ListComponent } from './view/list/list.component';
/**
 * Name: Routing for User Managemnt
 * Desc: This module handles routing for User Managemnt
 * **/
const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'card',
        component: CardComponent,
      },
      {
        path: 'list',
        pathMatch: 'full',
        component: ListComponent,
      },
      {
        path: 'card',
        pathMatch: 'full',
        component: CardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagmentRoutingModule {}
