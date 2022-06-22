import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ValidEmailDirective } from './valid-email.directive';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';


// import { RouterModule, Routes } from '@angular/router'
// const routes: Routes = [
//   {path:'home',component:AppComponent},
//   {path:'',redirectTo:'/home',pathMatch:'full'},
// ];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SignUpComponent,
    ValidEmailDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
