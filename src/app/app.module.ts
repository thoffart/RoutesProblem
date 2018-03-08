import { MapainicioModule } from './mapainicio/mapainicio.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MapainicioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
