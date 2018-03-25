import { FormstoroutesService } from './../sharedservices/formstoroutes.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl, FormArray} from '@angular/forms';


@Component({
  selector: 'app-formsmaps',
  templateUrl: './formsmaps.component.html',
  styleUrls: ['./formsmaps.component.css']
})
export class FormsmapsComponent implements OnInit {
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
    console.log(value);
  }

  getRotas() {
    for (const i of (<FormArray>this.locationForm.get('ends')).value) {
        this.rotas.push(i);
    }
    this.formstoroute.Addroutes(this.rotas);
    this.rotas = [];
  }

}
