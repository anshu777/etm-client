import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form;
  private isLoginError: boolean;
  constructor(private fb: FormBuilder,
    private myRoute: Router
    //,private authService: AuthService
    ) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    if (this.form.valid) {

      // this.oauthService.initImplicitFlow();

      // this.auth.sendToken(this.form.value.email);
      // this.myRoute.navigate(['dashboard']);

      // this.authService.userAuthentication(this.form.value.email, this.form.value.password)
      //   .subscribe((data: any) => {
      //     localStorage.setItem('userToken', data.access_token);
      //     localStorage.setItem('userRoles', data.role);
      //     this.myRoute.navigate(['dashboard']);
      //   },
      //     (err: HttpErrorResponse) => {
      //       this.isLoginError = true;
      //     });
    }

    //logout() {
    //this.oauthService.logOut();
    //}

    // get givenName() {
    //   const claims = this.oauthService.getIdentityClaims();
    //   if (!claims) {
    //     return null;
    //   }
    //   return claims['name'];
    // }

  }

}
