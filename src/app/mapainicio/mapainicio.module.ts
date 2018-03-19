import { MapgetroutesService } from './../sharedservices/mapgetroutes.service';
import { MapainicioComponent } from './mapainicio.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

@NgModule ({
  declarations: [MapainicioComponent],
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCWrV5T0lq1ryrpWBX59nMPMFgaDJG5TxY'
    })
  ],
  exports: [MapainicioComponent],
  providers: [MapgetroutesService],
})
export class MapainicioModule {}