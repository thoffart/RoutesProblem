import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';

@Injectable()
  export class MapgetroutesService {
  data: Object;
  constructor(private http: Http) { }


}
