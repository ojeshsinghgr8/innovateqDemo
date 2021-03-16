import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [HeaderComponent, SidebarComponent, MaterialModule],
})
export class SharedModule {}
