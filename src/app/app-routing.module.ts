import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './admin/home/home.component';



@NgModule({
    imports: [RouterModule.forRoot([
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
])],
  exports: [RouterModule] // делаем re-export модуля для использования директив при маршрутизации
})
export class AppRoutingModule { }
