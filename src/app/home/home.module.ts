import { MapafinalModule } from './../mapafinal/mapafinal.module';
import { AppRoutingModule } from './../sharedModules/app-routing.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapainicioModule } from '../mapainicio/mapainicio.module';
import { FormsmapsModule } from '../formsmaps/formsmaps.module';
import { ExemplosComponent } from '../exemplos/exemplos.component';
import * as $ from 'jquery';
@NgModule({
    declarations: [
        HomeComponent,
        ExemplosComponent,
],
    imports: [
        CommonModule,
        AppRoutingModule,
        MapainicioModule,
        FormsmapsModule,
        MapafinalModule
    ]
})

export class HomeModule {}
