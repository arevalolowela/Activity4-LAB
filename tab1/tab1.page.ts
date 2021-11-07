import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  username = '';
  password = new FormControl('');
  constructor(private router:Router) {}

  ngOnInit(){
  }

  login(){
    console.log(this.username);
    console.log(this.password);
    this.router.navigate(['profileForm']);
  }


  update(){
    this.password.setValue('riri')
  }
}
