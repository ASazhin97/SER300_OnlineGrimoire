import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component'
import { MainDashComponent } from './main-dash/main-dash.component';
import { SignupPageComponent }  from './signup-page/signup-page.component'


const routes: Routes = [
  { path:  '', redirectTo:  'login', pathMatch:  'full' },
  { path: 'login', component: LoginPageComponent},
  { path: 'dash', component:MainDashComponent},
  { path: 'signup', component:SignupPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
