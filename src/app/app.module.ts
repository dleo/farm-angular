import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { ContentComponent } from './content/content.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ListItemsComponent } from './list-items/list-items.component';

import { ItemService } from './item.service' ;
import { HttpClientModule } from '@angular/common/http';

import { DataTableModule } from "angular2-datatable";
import { DataFilterPipe } from './pipes/data-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSidebarComponent,
    FooterComponent,
    ControlSidebarComponent,
    ContentComponent,
    AddItemComponent,
    ListItemsComponent,
    DataFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DataTableModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
