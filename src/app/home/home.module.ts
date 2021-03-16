import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainContainerComponent } from './container/main-container/main-container.component';
import { HeaderComponent } from './view/header/header.component';
import { CardsComponent } from './view/cards/cards.component';
import { BlogsComponent } from './view/blogs/blogs.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MainContainerComponent,
    HeaderComponent,
    CardsComponent,
    BlogsComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}