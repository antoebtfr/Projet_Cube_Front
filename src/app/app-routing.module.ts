import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RessourceAddComponent } from './components/homepage-comments/ressource-add/ressource-add.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MyProfilComponent } from './pages/my-profil/my-profil.component';
import { IsConnectedGuard } from './shared/guard/is-connected.guard';

const routes: Routes = [
  {path: '' , component: HomepageComponent},
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  { path : 'profil', component: MyProfilComponent, canActivate: [IsConnectedGuard]},
  { path : 'testws20', component: RessourceAddComponent},
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
