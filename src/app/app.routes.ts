
import {Routes} from '@angular/router';

import {LoginComponent} from './system/login/login.component';
import {TestComponent} from './system/test/test.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'test', component: TestComponent},
  {path: '**', component: LoginComponent}
]
