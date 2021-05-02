import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AdminstatsComponent } from 'src/app/admin/adminstats/adminstats.component';
import { PublicationslistComponent } from 'src/app/components/admin/publicationslist/publicationslist.component';
import { SidebarComponent } from 'src/app/components/admin/sidebar/sidebar.component';
import { UserslistComponent } from 'src/app/components/admin/userslist/userslist.component';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    SidebarComponent,
    UserslistComponent,
    PublicationslistComponent,
    AdminstatsComponent,
    ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    DataTablesModule
  ], 
  providers : [ThemeService]
})
export class AdminModule { }
