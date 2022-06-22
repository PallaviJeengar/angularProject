import { Component, OnInit } from '@angular/core';
// import {ngModel} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginComponent=true;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmitLogin(data:any){
   console.log(data); 
  }
}
