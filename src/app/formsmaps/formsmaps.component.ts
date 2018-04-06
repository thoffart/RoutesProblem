import { MapainicioComponent } from './../mapainicio/mapainicio.component';
import { FormstoroutesService } from './../sharedservices/formstoroutes.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl, FormArray} from '@angular/forms';


@Component({
  selector: 'app-formsmaps',
  templateUrl: './formsmaps.component.html',
  styleUrls: ['./formsmaps.component.css']
})
export class FormsmapsComponent implements OnInit {
  @Input() mapainicioref: MapainicioComponent;
  locationForm: FormGroup;
  rotas: string[] = [];

  constructor(private fb: FormBuilder, private formstoroute: FormstoroutesService) {
    this.locationForm = fb.group({
        'ends': new FormArray([new FormControl(null, Validators.required), new FormControl(null, Validators.required)])
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
    this.formstoroute.Addroutes(this.rotas);
    this.formstoroute.GetGeocode(this.rotas);
    this.rotas = [];
    console.log('to aqui2');
    setTimeout(() => 
{
  this.mapainicioref.makeRequest();
},
500);
    
  }

}
