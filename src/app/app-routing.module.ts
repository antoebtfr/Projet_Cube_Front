import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RessourceAddComponent } from './components/homepage-comments/ressource-add/ressource-add.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {path: '' , component: HomepageComponent},
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  { path : 'testws20', component: RessourceAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
