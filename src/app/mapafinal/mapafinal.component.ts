import { MethodsService } from './../sharedservices/methods.service';
import { Component, OnInit } from '@angular/core';
import { FormstoroutesService } from '../sharedservices/formstoroutes.service';
import { MapgetroutesService } from '../sharedservices/mapgetroutes.service';
import {Http, Response, Jsonp} from '@angular/http';
import { MarkerModel } from '../sharedmodels/marker.model';

@Component({
  selector: 'app-mapafinal',
  templateUrl: './mapafinal.component.html',
  styleUrls: ['./mapafinal.component.css']
})
export class MapafinalComponent implements OnInit {
  ok: boolean = false;
  rede: string[] = [];
  data: Jsonp[];
  zoom: number = 14;
  travelmode: string = 'BICYCLING';
  markermodel: MarkerModel[] = [];
  dir: any;
  lat: number = -22.3430567;
  lng: number = -49.0496513;
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
    private http: Http,
    private mapgetroutes: MapgetroutesService, 
    private formsroutesservice: FormstoroutesService, 
    private methodsservice :MethodsService
  ) { 
    
  }
  
  ngOnInit() {
    //this.getresults();
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
    console.log(this.markermodel);
    this.getDirection();
  }

  checarede(i: number, j: number): boolean {
    for (let k=0; k<this.rede.length; k++) {
      if (String(j)==this.rede[k][0] && String(i)==this.rede[k][2]) {
        return true;
      }
    }
    return false;
  }


  getDirection() {
    this.dirs = [];
    let cont: number = 0;
    for (let i=0; i<this.markermodel.length;i++) {
      for (let j=0; j<this.markermodel.length;j++) {
        if (this.checarede(i, j)) {
          if (cont==0) {
            this.lat = this.markermodel[i].lat;
            this.lng = this.markermodel[i].lng;
            cont++;
          }
          if (i!=j) {
            this.dir = {
              origin: { lat: this.markermodel[j].lat, lng: this.markermodel[j].lng },
              destination: { lat: this.markermodel[i].lat, lng: this.markermodel[i].lng }
            };
            this.dirs.push(this.dir);
          }
        }
      }
    }
    
    console.log(this.rede);
    console.log(this.dirs);
    this.ok = true;
  }

  methodook(): boolean {
    if (this.ok == true) {
      return true;
    } else if (this.ok==false) {
      return false;
    }
  }
}
