import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AuthGuardService } from '../login/auth-guard.service';
import { HomeprincipalComponent } from '../homeprincipal/homeprincipal.component';
import { EdsComponent } from '../eds/eds.component';

const homeRoutes: Routes = [
    { path: '', component: HomeComponent,
    canActivate: [AuthGuardService], children: [
        {path: '', component: HomeprincipalComponent},
        {path: 'eds', component: EdsComponent}
    ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
      ],
      exports: [RouterModule],
})

export class HomeRoutingModule {}
