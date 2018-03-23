import { Component, OnInit, Input } from '@angular/core';
import {MarkerModel} from '../sharedmodels/marker.model';
import {MapgetroutesService} from '../sharedservices/mapgetroutes.service';
import {Http, Response} from '@angular/http'
import { MapsAPILoader } from '@agm/core/services/maps-api-loader/maps-api-loader';
import * as mapTypes from '@agm/core/services/google-maps-types';
import { GoogleMapsAPIWrapper } from '@agm/core';
declare var google: any;

@Component({
  selector: 'app-mapainicio',
  templateUrl: './mapainicio.component.html',
  styleUrls: ['./mapainicio.component.css']
})
export class MapainicioComponent implements OnInit {
  @Input() origin;
  @Input() destination;
  @Input() waypoints;
  dir = undefined;
  private _map: Promise<mapTypes.GoogleMap>;
  private _mapResolver: (value?: mapTypes.GoogleMap) => void;
  zoom: number = 14;
  data: Object;
  markermodel: MarkerModel[] = [
    new MarkerModel (-22.3430567, -49.0496513),
    new MarkerModel (-22.3437944, -49.05197339999999),
  ];
  lat: number = -22.3430567;
  lng: number = -49.0496513;
  constructor(private http: Http, private mapgetroutes: MapgetroutesService, private _loader: MapsAPILoader) { 
    this._map =
        new Promise<mapTypes.GoogleMap>((resolve: () => void) => { this._mapResolver = resolve; });
  }

  ngOnInit() {
  }


  createMap(el: HTMLElement, mapOptions: mapTypes.MapOptions): Promise<void> {
    return this._loader.load().then(() => {
      const map = new google.maps.Map(el, mapOptions);
      this._mapResolver(<mapTypes.GoogleMap>map);
      return;
    });
  }
  getDirection() {
    this.dir = {
      origin: { lat: -22.3430567, lng: -49.0496513 },
      destination: { lat: -22.3437944, lng: -49.05197339999999 }
    }
  }
}
