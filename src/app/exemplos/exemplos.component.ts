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
  rotas: string[][] = [];
  travelmode: number[] = [];
  texto = ['haha', 'haha1', 'jaja', 'kaka'];
  metodos = ['Extensão Mínima', 'Percurso Mínimo', 'Fluxo Máximo', 'Caxeiro'];
  constructor(private formstoroutesservice: FormstoroutesService, private methodsservice: MethodsService) { }

  ngOnInit() {
    this.rotas[0] = [
      'Av. Nações Unidas, 29 - Vila Nova Cidade Universitaria, Bauru - SP, 17044-002',
      'R. Ruy Mendes de Rosis, 1-175 - Vila Universitaria',
      'R. Abrahão Rahal, 10-47-10-49 - Vila Universitaria, Bauru - SP',
      'R. Lázaro Rodrigues, 3-1-3-59 - Parque Jardim Europa, Bauru - SP, 17017-491'
    ];
    this.travelmode[0] = 0;
    this.rotas[1] = [
      'São Paulo, SP',
      'Rio de Janeiro, RJ',
      'Belo Horizonte, Minas Gerais',
      'Curitiba, Paraná'
    ];
    this.travelmode[1] = 1;
  }

  exemplo(i: any): void {
    switch (i) {
      case 1: {
        this.formstoroutesservice.Addroutes(this.rotas[0]);
        this.formstoroutesservice.GetGeocode(this.rotas[0]);
        setTimeout(() => 
        {
          this.mapainicioref.makeRequest(this.travelmode[0]);
        },
        1000);
        setTimeout(() =>
        {
          this.methodsservice.resolveextminAPI();
        }, 
        2000);
        setTimeout(() => 
        {
          this.mapafinalref.getresults(this.travelmode[0]);
        },
        10000);
        break;
      }
      case 2: {
        this.formstoroutesservice.Addroutes(this.rotas[1]);
        this.formstoroutesservice.GetGeocode(this.rotas[1]);
        setTimeout(() => 
        {
          this.mapainicioref.makeRequest(this.travelmode[1]);
        },
        1000);
        setTimeout(() =>
        {
          this.methodsservice.resolvepercminAPI();
        }, 
        2000);
        setTimeout(() => 
        {
          this.mapafinalref.getresults(this.travelmode[1]);
        },
        10000);
        break;
      }
      case 3: {
        this.methodsservice.fluxomaximo();
        break;
      }
      case 4: {
        break;
      }
    }
  }
}
