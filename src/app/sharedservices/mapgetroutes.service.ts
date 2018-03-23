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
    this.http.get('https://maps.googleapis.com/maps/api/directions/json?key=AIzaSyCWrV5T0lq1ryrpWBX59nMPMFgaDJG5TxY&origin=Rua Ruy Mendes deRosis, 1-175 - Vila Universitaria, Bauru - SP&destination=Pizzaria 101 Sabores, 80, R. Padre João, 16 - Vila Cidade Universitaria, Bauru - SP, 17012-020',  {headers: headers}).subscribe((res: Response) => {
      this.data = res.json();
      console.log(res);
    });
    return this.data;
  }
}
