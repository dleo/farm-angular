import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarterComponent} from './starter.component';
import { ItemNewComponent } from './items/item-new/item-new.component'; 
import { ItemsListComponent } from './items/items-list/items-list.component'; 

export const starterRoutes = [
  {
    path: '',
    data: {
      title: 'Prueba'
    },
    children: [
      {
         path: '',
         redirectTo: 'items',
         pathMatch: 'full'
      },
      {
        path: 'items',
        component: ItemsListComponent,
        data: {
          title: 'Items List'
        }
      },
      {
        path: 'item-new',
        component: ItemNewComponent,
        data: {
          title: 'Item New'
        }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(starterRoutes)],
  exports: [RouterModule]
})
export class StarterRoutingModule {}
