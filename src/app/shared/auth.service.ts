import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {delay} from 'rxjs/internal/operators';


@Injectable()
export class AuthService {
  isLoggedIn: any = false;
  redirectUrl: string;


  login(login: string, password: string): Observable<any> {
    return of(true).pipe(delay(1000), map(val => {
        if (login === 'test@test' && password === 'test'){
          this.isLoggedIn = true;
          return this.isLoggedIn;
        }
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
