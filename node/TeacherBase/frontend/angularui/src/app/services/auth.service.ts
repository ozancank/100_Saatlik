import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RegisterUser } from '../components/register/registerUser';
import { LoginUser } from '../components/login/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  path = environment.path;
  TOKEN_KEY: 'toke;';

  register(registerUser: RegisterUser) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.http
      .post(this.path + '/user/register', registerUser, {
        headers: headers,
      })
      .subscribe((data) => {});
  }

  login(loginUser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.http
      .post(this.path + '/user/login', loginUser, {
        headers: headers,
      })
      .subscribe((data) => {
        this.saveToken(data['token']);
      });
  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  get isAuthentication() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}
