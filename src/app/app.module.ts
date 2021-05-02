import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageCommentsComponent } from './components/homepage-comments/homepage-comments.component';
import { RessourceAddComponent } from './components/homepage-comments/ressource-add/ressource-add.component';
import { ChangeNameComponent } from './components/myprofil/change-name/change-name.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MyProfilComponent } from './pages/my-profil/my-profil.component';
import { UserService } from './shared/services/user.service';



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
