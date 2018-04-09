import { MapainicioComponent } from './../mapainicio/mapainicio.component';
import { FormstoroutesService } from './../sharedservices/formstoroutes.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl, FormArray} from '@angular/forms';
import { MapafinalComponent } from '../mapafinal/mapafinal.component';


@Component({
  selector: 'app-formsmaps',
  templateUrl: './formsmaps.component.html',
  styleUrls: ['./formsmaps.component.css']
})
export class FormsmapsComponent implements OnInit {
  @Input() mapainicioref: MapainicioComponent;
  @Input() mapafinalref: MapafinalComponent;
  locationForm: FormGroup;
  rotas: string[] = [];
  travelmode: number = 0;
  methodo: number = 0;

  constructor(private fb: FormBuilder, private formstoroute: FormstoroutesService) {
    this.locationForm = fb.group({
        'ends': new FormArray([new FormControl(null, Validators.required), new FormControl(null, Validators.required), new FormControl(null, Validators.required), new FormControl(null, Validators.required)]),
         metodos: ['', Validators.required],
         travelmode: ['', Validators.required]

    });
  }

  ngOnInit() {
  }

  addend() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.locationForm.get('ends')).push(control);
  }

  delend(i: number) { 
    (<FormArray>this.locationForm.get('ends')).removeAt(i);
  }

  onSubmit(value: any): void {
  }

  getRotas() {
    for (const i of (<FormArray>this.locationForm.get('ends')).value) {
        this.rotas.push(i);
    }
<<<<<<< HEAD
    this.travelmode = this.locationForm.get('travelmode').value;
    this.methodo = this.locationForm.get('metodos').value;
    console.log(this.travelmode, this.methodo);
=======
    this.metodo = this.locationForm.get('metodos').value;
    this.travelmode = this.locationForm.get('travelmode').value;
    console.log(this.metodo + ' ' + this.travelmode);
>>>>>>> tela_exemplos_merge
    this.formstoroute.Addroutes(this.rotas);
    this.formstoroute.GetGeocode(this.rotas);
    this.rotas = [];
    setTimeout(() => 
{
  this.mapainicioref.makeRequest(this.travelmode);
},
500);
  
  }

}
