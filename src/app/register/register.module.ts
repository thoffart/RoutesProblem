import { AppRoutingModule } from './../sharedModules/app-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        AppRoutingModule,
        FormsModule,
        CommonModule
    ]
})

export class RegisterModule {}
