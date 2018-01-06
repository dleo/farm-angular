import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  onLogout() {
    UserLoginService.clearUserState();
    this.router.navigate(['/login']);
  }
}
