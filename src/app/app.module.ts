import { AppRoutingModule } from './sharedModules/app-routing.module';

import { AuthGuardService } from './login/auth-guard.service';
import { AuthService } from './login/auth.service';
import { FormstoroutesService } from './sharedservices/formstoroutes.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { HomeModule } from './home/home.module';
import { MapgetroutesService } from './sharedservices/mapgetroutes.service';


@NgModule({
  declarations: [
    AppComponent,
],
  imports: [
    LoginModule,
    RegisterModule,
    HomeModule,
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [
    AuthService,
    AuthGuardService,
    FormstoroutesService,
    MapgetroutesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
