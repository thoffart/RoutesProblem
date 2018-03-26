import { FormstoroutesService } from './sharedservices/formstoroutes.service';
import { MapainicioModule } from './mapainicio/mapainicio.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsmapsModule } from './formsmaps/formsmaps.module';
import { MapgetroutesService } from './sharedservices/mapgetroutes.service';


@NgModule({
  declarations: [
    AppComponent,
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
