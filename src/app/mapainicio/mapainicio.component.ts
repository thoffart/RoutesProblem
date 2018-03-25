import { MarkerModel } from './../sharedmodels/marker.model';
import { Component, OnInit, Input } from '@angular/core';
import {MapgetroutesService} from '../sharedservices/mapgetroutes.service';
import {Http, Response} from '@angular/http';
import { MapsAPILoader } from '@agm/core/services/maps-api-loader/maps-api-loader';
import * as mapTypes from '@agm/core/services/google-maps-types';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { RoutesModel } from '../sharedmodels/routes.model';
import { DirectionModel } from '../sharedmodels/directions.model';
declare var google: any;

@Component({
  selector: 'app-mapainicio',
  templateUrl: './mapainicio.component.html',
  styleUrls: ['./mapainicio.component.css']
})
export class MapainicioComponent implements OnInit {
  dir: any;
  data: Object = [];
  dirs: { 
    origin: {
      lat: number, 
      lng: number 
    },
    destination: {
      lat: number,
      lng: number
    }
  }[] = [
    
  ];
  travelmode: string = 'BICYCLING';
  zoom: number = 14;
 //"lat": -22.3404809,
   //                   "lng": -49.0568258
  markermodel: MarkerModel[] = [
    new MarkerModel (-22.3430567, -49.0496513),
    new MarkerModel (-22.3437944, -49.05197339999999),
  ];
  lat: number = -22.3430567;
  lng: number = -49.0496513;
  constructor(private http: Http, private mapgetroutes: MapgetroutesService) { 
  }

  ngOnInit() {
  }
  getDirection() {
    this.dir = {
      origin: { lat: -22.3430567, lng: -49.0496513 },
      destination: { lat: -22.3437944, lng: -49.05197339999999 }
    };
    this.dirs.push(this.dir);
    this.dir = {
      origin: { lat: -22.3430567, lng: -49.0496513 },
      destination: { lat: -22.3404809, lng: -49.0568258 }
    };
    this.dirs.push(this.dir);
  }

  makeRequest(): void {
    this.data = this.mapgetroutes.makerequest();
    console.log(this.data);
  }
}
