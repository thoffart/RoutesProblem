import { DirectionModel } from './../sharedmodels/directions.model';
import { FormstoroutesService } from './../sharedservices/formstoroutes.service';
import { MarkerModel } from './../sharedmodels/marker.model';
import { Component, OnInit, Input } from '@angular/core';
import {MapgetroutesService} from '../sharedservices/mapgetroutes.service';
import {Http, Response, Jsonp} from '@angular/http';
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
  apitravelmode: string = '';
  markermodel: MarkerModel[] = [
    new MarkerModel (-22.3430567, -49.0496513),
    new MarkerModel (-22.3437944, -49.05197339999999),
  ];
  origin: DirectionModel = new DirectionModel('0', '0');
  destination: DirectionModel[] = [
    new DirectionModel('0', '0'),
    new DirectionModel('0', '0')
  ];
  lat: number = -22.3430567;
  lng: number = -49.0496513;
  dir: any;
  dirs: { 
    origin: {
      lat: number, 
      lng: number 
    },
    destination: {
      lat: number,
      lng: number
    },
    visible: boolean
  }[] = [
    
  ];
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
    this.dirs.forEach(di=> {
      di.visible = false;
    });
    for (let i=0; i<this.markermodel.length;i++) {
      for (let j=0; j<this.markermodel.length;j++) {
        if (i!=j) {
          this.dir = {
            origin: { lat: this.markermodel[i].lat, lng: this.markermodel[i].lng },
            destination: { lat: this.markermodel[j].lat, lng: this.markermodel[j].lng },
            visible: true
          };
          this.dirs.push(this.dir);
        }
      }
      console.log(this.dirs);
    }
    
  }

  makeRequest(tm: number): void {
    switch (tm) {
      case 0:
        this.apitravelmode = '&travelmode=TRANSIT';
        break;
      case 1:
        this.apitravelmode = '&travelmode=DRIVING';
        break;
      case 2:
        this.apitravelmode = '&travelmode=WALKING';
        break;
      case 3: 
        this.apitravelmode = '&travelmode=BICYCLING';
        break;
    }
    this.data = this.formsroutesservice.GetData();
    this.addmarker(this.data);
    this.mapgetroutes.searchroute(this.data, this.apitravelmode);
    
  }

  addmarker(data: Jsonp[]): void {
    this.markermodel = [];
    this.markermodel.length = 0;
    for (let i=0;i<data.length;i++) {
      this.markermodel.push(new MarkerModel(data[i]['lat'], data[i]['lng']));
    }
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
