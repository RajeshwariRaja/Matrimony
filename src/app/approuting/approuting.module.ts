import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../features/home/home.component';
import { LoginComponent } from '../features/login/login.component';


const appRoutes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
  , { path: 'login', component: LoginComponent }
]

@NgModule({
  imports: [
    CommonModule
    , RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class ApproutingModule { }
