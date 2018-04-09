import { CommonModule } from '@angular/common';
import { MapainicioComponent } from './mapainicio.component';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

@NgModule ({
  declarations: [MapainicioComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCWrV5T0lq1ryrpWBX59nMPMFgaDJG5TxY'
    }),
    AgmDirectionModule,
  ],
  exports: [MapainicioComponent],
  providers: [],
})
export class MapainicioModule {}