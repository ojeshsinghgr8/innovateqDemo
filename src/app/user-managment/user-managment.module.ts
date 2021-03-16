import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagmentRoutingModule } from './user-managment-routing.module';
import { MainContainerComponent } from './container/main-container/main-container.component';
import { HeaderComponent } from './view/header/header.component';
import { CardComponent } from './view/card/card.component';
import { ListComponent } from './view/list/list.component';
import { SharedModule } from '../shared/shared.module';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    MainContainerComponent,
    HeaderComponent,
    CardComponent,
    ListComponent,
  ],
  imports: [CommonModule, UserManagmentRoutingModule, SharedModule],
  providers: [UserService],
})
export class UserManagmentModule {}
