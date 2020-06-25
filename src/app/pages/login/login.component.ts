import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  loginx(){
    const data = {
      email: this.email,
      password: this.password
    };
    this.http.post('http://127.0.0.1:3333/api/login', data).subscribe((result: any) => {
      sessionStorage.setItem('username', JSON.stringify(result));
      this.router.navigate(['chatroom-public']);
    });
  }
}
