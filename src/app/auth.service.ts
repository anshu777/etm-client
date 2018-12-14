import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { User } from './shared/services/user.model';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {
  private rootUrl = 'http://localhost/etmapi';
  constructor(private myRoute: Router, private http: Http) { }

  sendToken(token: string) {
    localStorage.setItem('userToken', token);
  }

  getToken() {
    return localStorage.getItem('userToken');
  }

  isLoggednIn() {
    return true;
    //return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('userToken');
    this.myRoute.navigate(['login']);
  }

  userAuthentication(userName, password) {
    //const data = 'username=' + userName + '&password=' + password + '&grant_type=password';
    const data = new User();
    data.UserName = userName;
    data.Password = password;
    data.Email = userName;

    // const reqHeader = new Headers({
    //   'Content-Type': 'application/x-www-urlencoded',
    //   'No-Auth': 'True',
    //   'Access-Control-Allow-Origin': '*'
    // });

    // //return this.http.post(this.rootUrl + '/token',
    // return this.http.post(this.rootUrl + '/api/user/login',
    //   data, { headers: reqHeader });



    const headerOptions = new Headers({ 'Content-Type': 'application/json' });
    const requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.rootUrl + '/api/user/login', data, requestOptions)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const data = res.json();
    return data || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const userRoles: string[] = JSON.parse(localStorage.getItem('userRoles'));
    allowedRoles.forEach(element => {
      if (userRoles.indexOf(element) > -1) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;

  }
}
