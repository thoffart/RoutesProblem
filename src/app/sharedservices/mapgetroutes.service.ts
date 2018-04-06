import { Injectable } from '@angular/core';
import { Http, Response, Headers, Jsonp, RequestOptions } from '@angular/http';

@Injectable()
  export class MapgetroutesService {
  duration: number[][] = [];
  distance: number[][] = [];
  data: Jsonp;
  apidistancecode: string = '/posts/json?' ;
  apikey: string = '&key=AIzaSyCWrV5T0lq1ryrpWBX59nMPMFgaDJG5TxY';
  //'https://maps.googleapis.om/maps/api/distancematrix/json?units=imperial&origins=40.6655101,-73.89188969999998&destinations=40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626&key=AIzaSyCWrV5T0lq1ryrpWBX59nMPMFgaDJG5TxY
  constructor(private http: Http) { }

  makerequest(): Object {
    this.http.get('/posts/json?units=imperial&origins=40.6655101,-73.89188969999998&destinations=40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626&key=AIzaSyCWrV5T0lq1ryrpWBX59nMPMFgaDJG5TxY').subscribe((res: Response) => {
      this.data = res.json();
    console.log(this.data);
    });
    return this.data;
  }

  searchroute(data: Jsonp[]): void {
    //console.log(data);
    var aux: string;
    var sol: string = '';
    for (let k=0; k<5; k++) {
      this.duration[k] = [];
      this.distance[k] = [];
    }
    sol = this.apidistancecode + 'origins=';
    for (let i = 0 ;i < data.length ; i++) {
      if (i!=data.length-1){
        sol += data[i]['lat'] + ',' + data[i]['lng'] + '|';
      } else {
        sol += data[i]['lat'] + ',' + data[i]['lng'];
      }
    }
    sol += '&destinations='
    for (let i = 0 ;i < data.length ; i++) {
      if (i!=data.length-1){
        sol += data[i]['lat'] + ',' + data[i]['lng'] + '|';
      } else {
        sol += data[i]['lat'] + ',' + data[i]['lng'];
      }
    }
    sol += '&mode=bicycling&language=fr-FR';
    sol += this.apikey;
    //console.log(sol);
    this.http.get(sol).subscribe((res: Response) =>  {
      this.data = res.json();
      for (let i=0;i<res.json().rows.length;i++) {
        for (let j=0; j<res.json().rows[i].elements.length;j++) {
          if (res.json().rows[i].elements[j].distance.value == 0 || res.json().rows[i].elements[j].distance.value == 0) {
            this.distance[i][j] = 9000000000;  
            this.duration[i][j] = 9000000000;
          } else {
            this.distance[i][j] = res.json().rows[i].elements[j].distance.value;
            this.duration[i][j] = res.json().rows[i].elements[j].duration.value;
          }
        }
      }
    })
  }


  getdistance(): number[][] {
    return this.distance;
  }
  getduration(): number[][] {
    return this.duration;
  }




}
