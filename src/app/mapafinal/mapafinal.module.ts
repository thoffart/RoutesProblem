import { CommonModule } from '@angular/common';
import { MapafinalComponent } from './mapafinal.component';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

@NgModule ({
  declarations: [MapafinalComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCWrV5T0lq1ryrpWBX59nMPMFgaDJG5TxY'
    }),
    AgmDirectionModule,
  ],
  exports: [MapafinalComponent],
  providers: [],
})
export class MapafinalModule {}