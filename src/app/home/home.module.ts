import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as $ from 'jquery';
import { HomeprincipalModule } from '../homeprincipal/homeprincipal.module';
import { EdsModule } from '../eds/eds.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from '../sharedModules/home-routing.module';


@NgModule({
    declarations: [
        HomeComponent,
],
    imports: [
        CommonModule,
        HomeprincipalModule,
        EdsModule,
        HomeRoutingModule,
    ]
})

export class HomeModule {}
