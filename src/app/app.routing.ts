import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(routes);


// export const routedComponents = [];