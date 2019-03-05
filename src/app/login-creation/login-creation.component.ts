import { User } from './../UserModel';
import { Component, OnInit, NgModule } from '@angular/core';



@Component({
  selector: 'app-login-creation',
  templateUrl: './login-creation.component.html',
  styleUrls: ['./login-creation.component.css']
})
export class LoginCreationComponent implements OnInit {

  user: User
  create: boolean  

  constructor() { }

  ngOnInit() {
    this.create = true;
  }

}
