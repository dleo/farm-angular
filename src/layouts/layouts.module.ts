import { NgModule } from "@angular/core";
import { AdminLayoutComponent } from "./admin.layout";
import { AuthLayoutComponent } from "./auth.layout";
import { HeaderComponent } from "./shared/header/header.component";
import { ControlSidebarComponent } from "./shared/control-sidebar/control-sidebar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { LeftSideComponent } from "./shared/left-side/left-side.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AuthLayoutComponent,
    ControlSidebarComponent,
    FooterComponent,
    HeaderComponent,
    LeftSideComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    AdminLayoutComponent,
    AuthLayoutComponent
  ]
})
export class LayoutsModule{}
