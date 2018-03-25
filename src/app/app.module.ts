import { FormstoroutesService } from './sharedservices/formstoroutes.service';
import { MapainicioModule } from './mapainicio/mapainicio.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsmapsModule } from './formsmaps/formsmaps.module';


@NgModule({
  declarations: [
    AppComponent,
],
  imports: [
    BrowserModule,
    MapainicioModule,
    FormsmapsModule,
  ],
  providers: [FormstoroutesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
