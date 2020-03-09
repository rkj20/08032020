import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
 
  public msg = '';
  public registerForm: FormGroup;
  public submitted = false;

  constructor(private formBuilder: FormBuilder) {
    // Make the navbar fixed and apply  default style 
    if(document.getElementById("appNavBar").classList.contains('homeNavSetting')){
      document.getElementById("appNavBar").classList.remove('homeNavSetting');
    }
  }

  ngOnInit(): void {
    // Bild the contact form with validators
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      subject: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      msg: ['', Validators.required, Validators.minLength(10)]
    });
  }

  get f() { return this.registerForm.controls; }

  public onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    
    // Show sucess msg and reset the form
    this.msg = "We will get back to you ASAP."
    this.submitted = false;
    this.registerForm.reset();
  }
}
