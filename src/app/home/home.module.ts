import { AppRoutingModule } from './../sharedModules/app-routing.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule
    ]
})

export class HomeModule {}
