import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from 'src/app/components/admin/sidebar/sidebar.component';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    SidebarComponent
    ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ], 
  providers : [ThemeService]
})
export class AdminModule { }
