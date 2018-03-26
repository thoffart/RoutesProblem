import { FormstoroutesService } from './../sharedservices/formstoroutes.service';
import { MarkerModel } from './../sharedmodels/marker.model';
import { Component, OnInit, Input } from '@angular/core';
import {MapgetroutesService} from '../sharedservices/mapgetroutes.service';
import {Http, Response, Jsonp} from '@angular/http';
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
  markermodel: MarkerModel[] = [
    new MarkerModel (-22.3430567, -49.0496513),
    new MarkerModel (-22.3437944, -49.05197339999999),
  ];
  origin: MarkerModel;
  destination: MarkerModel[] = [];
  lat: number = -22.3430567;
  lng: number = -49.0496513;
  dir: any;
  data: Jsonp[];
  routes: string[];
  travelmode: string = 'BICYCLING';
  zoom: number = 14;
 //"lat": -22.3404809,
   //                   "lng": -49.0568258
  constructor(private http: Http, private mapgetroutes: MapgetroutesService, private formsroutesservice: FormstoroutesService) { 
  }

  ngOnInit() {
  }
  getDirection() {
    this.origin = this.markermodel[0];
    this.destination = this.markermodel;
  }

  makeRequest(): void {
    this.data = this.formsroutesservice.GetData();
    this.addmarker(this.data);
  }

  addmarker(data: Jsonp[]): void {
    for (let j=0;j<=this.markermodel.length;j++) {
      this.markermodel.pop();
    }
    for (let i=0;i<data.length;i++) {
      this.markermodel.push(new MarkerModel(data[i]['lat'], data[i]['lng']));
    }
    console.log(this.markermodel);
    this.getDirection();
    
  }

  formscomplete(): boolean {
    if (this.formsroutesservice.Getaddroutes()) {
      return true;
    } else {
      return false;
    }
  }



}
