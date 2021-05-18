import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from '../shared/auth-guard.service';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: HomeComponent,
        canActivate: [AuthGuard],
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
