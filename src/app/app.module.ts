
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule }  from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitComponent, ProfileComponent } from './profile/profile.component';
import { FormComponent } from './form/form.component';
import {AlertsService} from './alert-service/alerts.service'
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

@NgModule({
  declarations: [
    AppComponent,
    GitComponent,
    FormComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule.forRoot(),// normal progress bar
    NgProgressHttpModule // progress bar to load http requests
  ],
  providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
