import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagmentRoutingModule } from './user-managment-routing.module';
import { MainContainerComponent } from './container/main-container/main-container.component';


@NgModule({
  declarations: [MainContainerComponent],
  imports: [
    CommonModule,
    UserManagmentRoutingModule
  ]
})
export class UserManagmentModule { }
