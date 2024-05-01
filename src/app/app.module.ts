// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// // import { RegisterComponent } from './register/register.component';


// // import { RegisterComponent } from './register/register.component';
// // import { LoginComponent } from './components/login/login.component';
// import { HttpClientModule } from '@angular/common/http';
// import { RegisterComponent } from './core/components/register/register.component';
// // import { RegisterComponent } from './core/components/register/register.component';


// @NgModule({
//   declarations: [
//     AppComponent,
//      RegisterComponent
//     // RegisterComponent,
//     // LoginComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })


// export class AppModule { }





import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './core/components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './core/components/login/login.component'; 
import { HttpClientModule  }  from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule // Add ReactiveFormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
