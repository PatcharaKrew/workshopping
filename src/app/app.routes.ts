import { Routes, provideRouter } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AddproComponent } from './pages/addpro/addpro.component';
import { InfoproductComponent } from './pages/infoproduct/infoproduct.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', component:  WelcomeComponent},
  { path: 'homepage', component: HomepageComponent },
  { path: 'addpro', component: AddproComponent},
  { path: 'infoproduct/:id', component: InfoproductComponent}
  // {
  //   path: 'welcome',
  //   loadChildren: () =>
  //     import('./pages/welcome/welcome.routes').then((m) => m.WELCOME_ROUTES),
  // },

];
