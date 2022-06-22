import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'home',component:MainComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  { path: 'login',component: LoginComponent},
  { path: 'signUp',component: SignUpComponent},
  {path:"user",loadChildren:()=>
    import('./user/user.module')
    .then(loaded=>loaded.UserModule)
  },
  {path:"book",loadChildren:()=>
    import('./book/book.module')
    .then(loaded=>loaded.BookModule)
  }   
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
