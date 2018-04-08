import { AppRoutingModule } from './../sharedModules/app-routing.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as $ from 'jquery';
import { HomeprincipalModule } from '../homeprincipal/homeprincipal.module';
import { EdsModule } from '../eds/eds.module';
@NgModule({
    declarations: [
        HomeComponent,
],
    imports: [
        CommonModule,
        AppRoutingModule,
        HomeprincipalModule,
        EdsModule
    ]
})

export class HomeModule {}
