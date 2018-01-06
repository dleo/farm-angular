import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserLoginService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group ({
      password: ['demo' , Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
  }

  onLogin() {
    UserLoginService.signIn()
      .then(() => {
        this.router.navigate(['/salesitems']);
      });
  }
}
