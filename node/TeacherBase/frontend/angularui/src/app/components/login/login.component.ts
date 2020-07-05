import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}
  loginUser: any = {};
  ngOnInit(): void {}

  login(loginUser) {
    this.authService.login(loginUser);
  }
}
