import { Component, OnInit } from '@angular/core';
import {MarkerModel} from '../sharedmodels/marker.model';
import {MapgetroutesService} from '../sharedservices/mapgetroutes.service';
import {Http, Response} from '@angular/http'


@Component({
  selector: 'app-mapainicio',
  templateUrl: './mapainicio.component.html',
  styleUrls: ['./mapainicio.component.css']
})
export class MapainicioComponent implements OnInit {
  zoom: number = 14;
  data: Object;
  markermodel: MarkerModel[] = [
    new MarkerModel (-22.3430567, -49.0496513),
    new MarkerModel (-22.3437944, -49.05197339999999),
  ];
  lat: number = -22.3430567;
  lng: number = -49.0496513;
  constructor(private http: Http, private mapgetroutes: MapgetroutesService) { }

  ngOnInit() {
  }

  makerequest() {
    this.data = this.mapgetroutes.makerequest();
  }

}
