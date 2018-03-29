import { FormstoroutesService } from './sharedservices/formstoroutes.service';
import { MapainicioModule } from './mapainicio/mapainicio.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsmapsModule } from './formsmaps/formsmaps.module';
import { MapgetroutesService } from './sharedservices/mapgetroutes.service';
import { MethodsComponent } from './methods/methods.component';
import { ExemplosComponent } from './exemplos/exemplos.component';


@NgModule({
  declarations: [
    AppComponent,
    MethodsComponent,
    ExemplosComponent,
],
  imports: [
    BrowserModule,
    MapainicioModule,
    FormsmapsModule,
  ],
  providers: [FormstoroutesService, MapgetroutesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
