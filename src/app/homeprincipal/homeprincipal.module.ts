import { ExemplosComponent } from './../exemplos/exemplos.component';
import { MapafinalModule } from './../mapafinal/mapafinal.module';
import { AppRoutingModule } from './../sharedModules/app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapainicioModule } from '../mapainicio/mapainicio.module';
import { FormsmapsModule } from '../formsmaps/formsmaps.module';
import * as $ from 'jquery';
import { HomeprincipalComponent } from './homeprincipal.component';
@NgModule({
    declarations: [
        ExemplosComponent,
        HomeprincipalComponent

],
    imports: [
        CommonModule,
        AppRoutingModule,
        MapainicioModule,
        FormsmapsModule,
        MapafinalModule
    ]
})

export class HomeprincipalModule {}
