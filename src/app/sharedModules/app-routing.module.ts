import { EdsComponent } from './../eds/eds.component';
import { AuthGuardService } from './../login/auth-guard.service';
import { Routes, RouterModule, Router, PreloadAllModules } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { HomeComponent } from '../home/home.component';
import { HomeprincipalComponent } from '../homeprincipal/homeprincipal.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'home', component: HomeComponent, loadChildren: '../home/home.module#HomeModule',
    canActivate: [AuthGuardService], children: [
        {path: '', component: HomeprincipalComponent},
        {path: 'eds', component: EdsComponent}
    ]}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})




export class AppRoutingModule {

}
