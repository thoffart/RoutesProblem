import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from '@angular/forms'


@Component({
  selector: 'formsmaps',
  templateUrl: './formsmaps.component.html',
  styleUrls: ['./formsmaps.component.css']
})
export class FormsmapsComponent implements OnInit {
  locationForm: FormGroup;

  constructor(fb: FormBuilder) { 
    this.locationForm = fb.group({
        'teste': ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit(value: any): void {

  }

}
