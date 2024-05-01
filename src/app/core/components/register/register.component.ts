import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
 
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.registerForm = this.fb.group({
      consumernumber : new FormControl(""),
      billnumber : new FormControl(""),
      username : new FormControl(""),
      password : new FormControl(""),
      title : new FormControl(""),
      name : new FormControl(""),
      email : new FormControl(""),
      phone : new FormControl("")



      // Define your form controls and validators here
    });
   
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      // Form is valid, handle submission
      console.log(this.registerForm.value);
      // You can perform form submission actions here
    } else {
      // Form is invalid, mark all fields as touched to display validation errors
      this.registerForm.markAllAsTouched();
    }
  }
}
