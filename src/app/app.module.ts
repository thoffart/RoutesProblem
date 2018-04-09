import { HttpModule } from '@angular/http';


import { AuthGuardService } from './login/auth-guard.service';
import { MethodsService} from './sharedservices/methods.service';
import { AuthService } from './login/auth.service';
import { FormstoroutesService } from './sharedservices/formstoroutes.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { MapgetroutesService } from './sharedservices/mapgetroutes.service';
import { AppRoutingModule } from './sharedModules/app-routing.module';





@NgModule({
  declarations: [
    AppComponent
],
  imports: [
    LoginModule,
    RegisterModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    AuthGuardService,
    FormstoroutesService,
    MapgetroutesService,
    MethodsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
