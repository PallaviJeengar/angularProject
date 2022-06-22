import { AbstractControl } from '@angular/forms';

export function ValidatePassword(control: AbstractControl) {
    console.log("jncjdn")
    const pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$";
  if (control.value.match(pattern)) 
  {
   return null;
  }
  else
  {
    return { invalidPassword: true };
  }
}