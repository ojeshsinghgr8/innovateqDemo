import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
/**
 * Name: Shared Module
 * Desc: This module handles all the shared and common components.
 * Its also imports and exports matrial Design module.
 * **/
@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [HeaderComponent, SidebarComponent, MaterialModule, RouterModule],
})
export class SharedModule {}
