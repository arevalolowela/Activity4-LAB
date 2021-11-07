import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  profileForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      province: ['']
    }),
  hobbies: this.fb.array([
    this.fb.control('')
  ])
});
  constructor(private fb: FormBuilder) {}

  ngOnInit(){

  }

  onSubmit(){
    console.log(this.profileForm);
    
  }

  update(){
    this.profileForm.patchValue({
      fistname: '',
      lastname: ''
    });
  }
  get hobbies(){
    return this.profileForm.get('hobbies') as FormArray;
  }

  addHobby(){
    this.hobbies.push(this.fb.control(''));
  }
}
