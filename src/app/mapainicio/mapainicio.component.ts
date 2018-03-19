import { Component, OnInit } from '@angular/core';
import {MarkerModel} from '../sharedmodels/marker.model';

@Component({
  selector: 'app-mapainicio',
  templateUrl: './mapainicio.component.html',
  styleUrls: ['./mapainicio.component.css']
})
export class MapainicioComponent implements OnInit {
  zoom: number = 10;
  markermodel: MarkerModel[] = [
    new MarkerModel (51.678418, 7.809007)
  ];
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
