
import {Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {DashboardComponent} from './content/apps/dashboard/dashboard.component';
import {SaleItemsComponent} from './content/apps/sale-items/sale-items.component';
import {SaleItemEditorComponent} from './content/apps/sale-items/sale-item-editor/sale-item-editor.component';

export const routes: Routes = [
  {path: 'main', component: MainComponent},
  {
    path: 'farm',
    component: MainComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'saleitems', component: SaleItemsComponent},
      {path: 'saleitems/new', component: SaleItemEditorComponent},
      {path: 'saleitems/:id', component: SaleItemEditorComponent}
    ]
  }
]
