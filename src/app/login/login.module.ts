import { AppRoutingModule } from './../sharedModules/app-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent, LoginDialogComponent } from './login.component';
import { FormsModule} from '@angular/forms';

import { CdkTableModule } from '@angular/cdk/table';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatModule } from '../sharedModules/Mat.module';
import 'hammerjs';



@NgModule({
    entryComponents: [LoginComponent, LoginDialogComponent],
    declarations: [
        LoginComponent,
        LoginDialogComponent
    ],
    imports: [
        FormsModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        AppRoutingModule,
        MatModule
    ]
})

export class LoginModule {}
