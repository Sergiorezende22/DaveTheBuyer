import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const APP_AUTHENTICATION_ROUTES: Routes = [
   {
      path: '',
      component: LoginPageComponent,
   },
];
