import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { DisplayCompanyComponent } from './components/display-company/display-company.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateCompanyComponent,
    DisplayCompanyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        {
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'create',
            component: CreateCompanyComponent
        },
        {
            path: 'get',
            component: DisplayCompanyComponent
        }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
