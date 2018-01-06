import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminLayoutComponent } from '@layouts/admin.layout';
import { AuthLayoutComponent } from '@layouts/auth.layout';

import { SalesitemsComponent } from '@app/salesitems/salesitems.component';
import { LoginComponent } from '@app/login/login.component';

import { AuthGuard } from '../../services/auth-guard.service';
import { FormComponent } from '../salesitems/form/form.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'salesitems',
        pathMatch: 'full',
      },
      {
        path: '',
        component: AdminLayoutComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: 'salesitems',
            component: SalesitemsComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'salesitems/new',
            component: FormComponent,
            data: {
              title: 'Nuevo item'
            },
            canActivate: [AuthGuard]
          },
          {
            path: 'salesitems/:id/edit',
            component: FormComponent,
            data: {
              title: 'Editar item #'
            },
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: '',
        component: AuthLayoutComponent,
        children: [
          {
            path: 'login',
            component: LoginComponent,
          }
        ]
      },
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
