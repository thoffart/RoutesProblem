import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';

@Injectable()
  export class MapgetroutesService {
  data: Object;
  constructor(private http: Http) { }

  makerequest(): Object {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'localhost:4200');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    this.http.get('https://maps.googleapis.com/maps/api/directions/json?key=AIzaSyCWrV5T0lq1ryrpWBX59nMPMFgaDJG5TxY&origin=Rua Ruy Mendes deRosis, 1-175 - Vila Universitaria, Bauru - SP&destination=Kozan Sushi Bauru Restaurante Japonês Rodízio, Alameda Dr. Octávio Pinheiro Brisolla, 1547 - Nova Cidade Universitária, Bauru - SP, 17012-191',  {headers: headers}).subscribe((res: Response) => {
      this.data = res.json();
      console.log(this.data);
    });
    return this.data;
  }
}
