import { Routes } from '@angular/router';

export const routes: Routes = [
   {
      path: '',
      loadChildren: () =>
         import('./modules/authentication/authentication.routes').then(
            m => m.APP_AUTHENTICATION_ROUTES
         ),
   },
   {
      path: '**',
      redirectTo: '',
      pathMatch: 'full',
   },
];
