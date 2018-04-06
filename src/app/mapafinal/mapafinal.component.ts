import { MethodsService } from './../sharedservices/methods.service';
import { Component, OnInit } from '@angular/core';
import { FormstoroutesService } from '../sharedservices/formstoroutes.service';
import { MapgetroutesService } from '../sharedservices/mapgetroutes.service';
import { Jsonp } from '@angular/http';
import { MarkerModel } from '../sharedmodels/marker.model';

@Component({
  selector: 'app-mapafinal',
  templateUrl: './mapafinal.component.html',
  styleUrls: ['./mapafinal.component.css']
})
export class MapafinalComponent implements OnInit {
  rede: string;
  data: Jsonp[];
  zoom: number = 14;
  markermodel: MarkerModel[] = [];
  dir: any;
  lat: number;
  lng: number;
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
  constructor(
    private mapgetroutes: MapgetroutesService, 
    private formsroutesservice: FormstoroutesService, 
    private methodsservice :MethodsService
  ) { 
    
  }

  ngOnInit() {
    this.getresults();
  }

  getresults() {
    this.rede = this.methodsservice.sendrede();
    this.data = this.formsroutesservice.GetData();
    this.addmarker(this.data);
    this.mapgetroutes.searchroute(this.data);
  }

  addmarker(data: Jsonp[]): void {
    for (let j=0;j<=this.markermodel.length;j++) { //fixxxxxx
      this.markermodel.pop();
    }
    for (let i=0;i<data.length;i++) {
      this.markermodel.push(new MarkerModel(data[i]['lat'], data[i]['lng']));
    }
    this.getDirection();
  }

  getDirection() {
    this.dirs = [];
    for (let i=0; i<this.markermodel.length;i++) {
      for (let j=0; j<this.markermodel.length;j++) {
        if (i==0&&j==0) {
          this.lat = this.markermodel[i].lat;
          this.lng = this.markermodel[i].lng;
        }
        if (i!=j) {
          this.dir = {
            origin: { lat: this.markermodel[i].lat, lng: this.markermodel[i].lng },
            destination: { lat: this.markermodel[j].lat, lng: this.markermodel[j].lng }
          };
          this.dirs.push(this.dir);
        }
      }
    }
    
  }
}
