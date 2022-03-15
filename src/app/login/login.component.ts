import { HttpResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { User } from '../_model/user';
import { AuthenticationService } from '../_service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  showLoading: boolean;


  constructor(private authenticationService: AuthenticationService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigateByUrl('/checkout').then(r => { });
    } else {
      this.router.navigateByUrl('/login').then(r => { });
    }
  }

  onLogin(user: any): void {
    // console.log(user);
    this.showLoading = true;
    this.subscriptions.push(
      this.authenticationService.login(user)
        .pipe(finalize(() => this.showLoading = false))
        .subscribe(
          (response: HttpResponse<User>) => {
            const token = response.headers.get('Jwt-Token');
            this.authenticationService.saveToken(token);
            this.authenticationService.addUserInfoToLocalCache(response.body);
            this.router.navigateByUrl('/books').then(r => { });
          }, error => {
            console.log(error);
            this.toastr.error(error.error.message);
          }
        )
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
