import { Routes, RouterModule, Router, PreloadAllModules } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    {path: 'home', loadChildren: '../home/home.module#HomeModule'}

    
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules} )
    ],
    exports: [RouterModule]
})




export class AppRoutingModule {

}
