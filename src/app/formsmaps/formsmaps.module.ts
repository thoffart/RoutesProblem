import { NgModule } from '@angular/core';
import { FormsmapsComponent } from './formsmaps.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule ({
  declarations: [FormsmapsComponent],
  imports: [ FormsModule, ReactiveFormsModule
  ],
  exports: [FormsmapsComponent],
  providers: [],
})
export class FormsmapsModule {}