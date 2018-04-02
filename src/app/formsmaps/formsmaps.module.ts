import { NgModule } from '@angular/core';
import { FormsmapsComponent } from './formsmaps.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule ({
  declarations: [FormsmapsComponent],
  imports: [ FormsModule, ReactiveFormsModule, CommonModule
  ],
  exports: [FormsmapsComponent],
  providers: [],
})
export class FormsmapsModule {}
