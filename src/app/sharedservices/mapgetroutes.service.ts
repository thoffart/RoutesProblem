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
    this.http.get('https://maps.googleapis.om/maps/api/distancematrix/json?units=imperial&origins=40.6655101,-73.89188969999998&destinations=40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626&key=AIzaSyCWrV5T0lq1ryrpWBX59nMPMFgaDJG5TxY',  {headers: headers}).subscribe((res: Response) => {
      this.data = res.json();
      console.log(this.data);
    });
    return this.data;
  }

  searchmarker(): Object {
    this.http.get('').subscribe((res: Response) =>  {
      this.data = res.json();
    })
    return this.data;
  }


}
