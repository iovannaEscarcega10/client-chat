import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginx(){
    const data = {
      email: this.email,
      password: this.password
    };
    sessionStorage.setItem('username', data.email);
    this.router.navigate(['chatroom-public']);
  }
}
