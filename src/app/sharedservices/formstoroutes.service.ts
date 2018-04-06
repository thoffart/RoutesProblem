import { MarkerModel } from './../sharedmodels/marker.model';
import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';

@Injectable()
export class FormstoroutesService {
  private rotas: string[];
  private markermodel: MarkerModel[];
  data: Jsonp[] = [];

  addsroutes: boolean = false;
  apigeocode: string = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  apikey: string = '&key=AIzaSyCWrV5T0lq1ryrpWBX59nMPMFgaDJG5TxY';

  constructor(private http: Http) { }

  Addroutes(rotas: string[]) {
    this.rotas = rotas;
    this.addsroutes = true;
  }

  Sendroutes(rotas: string[]) {
    rotas = this.rotas;
  }

  Getaddroutes(): boolean {
    if (this.addsroutes) {
      return true;
    } else {
      return false;
    }
  }

  GetGeocode(rotas: string[]): void { //cette fonction prendre les données de la api geocode
    for (let i=0; i< rotas.length; i++) {
      this.http.get(this.apigeocode + rotas[i]  + this.apikey)
      .subscribe((res: Response) =>  {  
        this.data[i] = res.json().results[0].geometry.location;
        console.log(this.data[i]);
      })
      
    }
    this.addsroutes = true;
    //console.log(this.data);
  }

  GetData(): Jsonp[] {
    return this.data;
  }

  


}
