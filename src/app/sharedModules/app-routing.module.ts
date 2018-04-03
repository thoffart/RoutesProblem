import { AuthGuardService } from './../login/auth-guard.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { HomeComponent } from '../home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'home', component: LoginComponent, canActivate: [AuthGuardService]}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})




export class AppRoutingModule {

}
