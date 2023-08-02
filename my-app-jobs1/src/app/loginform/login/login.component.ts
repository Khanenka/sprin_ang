import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


import { LoginService } from './login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!: string;
  password !: string;
  errorMessage = 'Неправильный логин или пароль';
  successMessage!: string;
  invalidLogin = false;
  loginSuccess = false;
  show: boolean= false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: LoginService) {   }

  ngOnInit() {
  }

  handleLogin() {
    this.authenticationService.authenticationService(this.username, this.password).subscribe(()=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      console.log(this.successMessage);
      this.clear();
    // alert(this.successMessage);

      this.router.navigate(['app']);

    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;

      alert(this.errorMessage)
    });
  }
  clear(){
    this.username ="";
    this.password = "";
    this.show = true;
    }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
