import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinValueDirective } from './directives/min-value.directive';
import { MaxValueDirective } from './directives/max-value.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MinValueDirective, MaxValueDirective]
})
export class CoreModule { }
