import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './core/components/register/register.component'; 
import { LoginComponent } from './core/components/login/login.component';
const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' },
   {path:'register', component :RegisterComponent},
  {path:'login', component :LoginComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
