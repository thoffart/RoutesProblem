import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapainicio',
  templateUrl: './mapainicio.component.html',
  styleUrls: ['./mapainicio.component.css']
})
export class MapainicioComponent implements OnInit {
  zoom: number = 10;
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
