import { User } from '../userModel';
import { Component, OnInit, NgModule } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User

  constructor() { }

  ngOnInit() {
  }

}
