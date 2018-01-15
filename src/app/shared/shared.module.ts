import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../core/services/auth.service';
import { HttpCommonService } from './services/http-common.service';

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
        HttpCommonService
    ]
})
export class SharedModule {}
