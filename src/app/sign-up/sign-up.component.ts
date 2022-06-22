import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,Validators } from '@angular/forms';
import { User } from '../User';
import { ValidatePassword } from 'src/shared/password.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  submitForm= new FormGroup({
    firstName:new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(50)]),
    lastName:new FormControl('', Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(50)])),
    email:new FormControl('', Validators.compose([Validators.required, Validators.email])),
    mobile:new FormControl('', Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])),
    address:new FormControl('', Validators.required),
    password:new FormControl('',[Validators.required,ValidatePassword])
});

  post:any=[]
  
  constructor() {
    
  }

  addUser()
  {
    console.log(this.submitForm.value);
  }
  ngOnInit(): void {
    
  }
  onSetValue()
  {
    const user=new User("Pallavi","Jeengar","pallavi@gmail.com",7877898767,"Jaipur","P@gmail.com")
    this.submitForm.setValue(user);
  }
  onPatchValue()
  {
    this.submitForm.patchValue({
      firstName:"Riya",
      lastName:"Sharma"
    })
  }
}
