import { MapafinalComponent } from './../mapafinal/mapafinal.component';
import { FormstoroutesService } from './../sharedservices/formstoroutes.service';
import { Component, OnInit, Input } from '@angular/core';
import { MapainicioComponent } from '../mapainicio/mapainicio.component';
import { MethodsService } from '../sharedservices/methods.service';

@Component({
  selector: 'app-exemplos',
  templateUrl: './exemplos.component.html',
  styleUrls: ['../home/home.component.css']
})
export class ExemplosComponent implements OnInit {
  @Input() mapainicioref: MapainicioComponent;
  @Input() mapafinalref: MapafinalComponent;
  itens = [1, 2, 3, 4];
  rotas = [''];
  constructor(private formstoroutesservice: FormstoroutesService, private methodsservice: MethodsService) { }

  ngOnInit() {
  }

  exemplo(i: any): void {
    switch (i) {
      case 1: {
        this.rotas = ['Av. Nações Unidas, 29 - Vila Nova Cidade Universitaria, Bauru - SP, 17044-002', 'R. Ruy Mendes de Rosis, 1-175 - Vila Universitaria', 'R. Abrahão Rahal, 10-47-10-49 - Vila Universitaria, Bauru - SP', 'R. Lázaro Rodrigues, 3-1-3-59 - Parque Jardim Europa, Bauru - SP, 17017-491'];
        this.formstoroutesservice.Addroutes(this.rotas);
        this.formstoroutesservice.GetGeocode(this.rotas);
        setTimeout(() => 
        {
          this.mapainicioref.makeRequest();
        },
        1000);
        setTimeout(() =>
        {
          this.methodsservice.resolveextminAPI();
        }, 
        2000);
        setTimeout(() => 
        {
          this.mapafinalref.getresults();
        },
        10000);
        break;
      }
      case 2: {
        break;
      }
      case 3: {
        break;
      }
      case 4: {
        break;
      }
    }
  }
}
