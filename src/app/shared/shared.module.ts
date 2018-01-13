import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../core/services/auth.service';
import { CommonService } from './services/common.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        AuthService,
        CommonService
    ]
})
export class SharedModule {}
