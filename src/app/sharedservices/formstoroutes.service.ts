import { MarkerModel } from './../sharedmodels/marker.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class FormstoroutesService {
  private rotas: string[];
  private markermodel: MarkerModel[];
  data: Object = [];

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

  GetGeocode(rotas: string[]): void {
    for (let i=0; i< rotas.length; i++) {
      this.http.get(this.apigeocode + rotas[i]  + this.apikey).subscribe((res: Response) =>  {
        this.data = res.json();
        console.log(this.data);
      })
    }
  }


}
