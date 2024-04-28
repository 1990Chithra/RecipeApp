import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  { path: 'users', loadChildren: () => import('./Modules/users/users.module').then(m => m.UsersModule) },
  {
    path:'**',component:PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
