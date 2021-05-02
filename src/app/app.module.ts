import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageCommentsComponent } from './components/homepage-comments/homepage-comments.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserService } from './shared/services/user.service'

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { RessourceAddComponent } from './components/homepage-comments/ressource-add/ressource-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyProfilComponent } from './pages/my-profil/my-profil.component';
import { ChangeNameComponent } from './components/myprofil/change-name/change-name.component';
import { NavbarThemeDirective } from './shared/directives/navbar-theme.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    HomepageCommentsComponent,
    SearchbarComponent,
    RessourceAddComponent,
    MyProfilComponent,
    ChangeNameComponent,
    NavbarThemeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatInputModule,
    ReactiveFormsModule
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
