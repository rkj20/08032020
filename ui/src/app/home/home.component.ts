import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public msg = '';
  public registerForm: FormGroup;
  public submitted = false;

  constructor(public data: DataService, private formBuilder: FormBuilder) {
    // Add the style for Navbar so the menu is different for Home screen
    document.getElementById("appNavBar").classList.add('homeNavSetting');
    document.getElementById("appNavBar").style.boxShadow = 'none';
  }

  ngOnInit() {
      // Bild the login form with validators
      this.registerForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(8)]],
          confirmPassword: ['', Validators.required],
      }, {
          validator: this.mustMatch('password', 'confirmPassword')
      });
  }

  ngOnDestroy(){
    document.getElementById("appNavBar").style.boxShadow = '5px 5px 5px lightgray';
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  public onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // store the vale in service so that we can hide the login form
      this.data.loggedIn = true;

      // display form values on success
      alert('Logged in successfully');
  }  

  // Function to match the password and re-typed password value
  public mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }
}
