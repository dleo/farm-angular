import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthServiceService} from './services/auth-service.service';
import {User} from './model/user';

@Component({
  selector: 'farm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  user: User = {
    username: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) { }

  ngOnInit() {
  }

  login(event: any) {
    this.authService.login(this.user);
    this.router.navigate(['/farm/dashboard']);
  }

}
