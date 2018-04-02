import { AppRoutingModule } from './sharedModules/app-routing.module';

import { AuthGuardService } from './login/auth-guard.service';
import { AuthService } from './login/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent
],
  imports: [
    LoginModule,
    RegisterModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
