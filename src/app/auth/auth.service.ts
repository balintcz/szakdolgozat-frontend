import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { LoginData } from './login-data';
import { SignUpData } from './signup-data';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8888/api/auth/signin';
  private signupUrl = 'http://localhost:8888/api/auth/signup';

  constructor(private http: HttpClient) {
  }

  auth(credentials: LoginData): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpData): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}
