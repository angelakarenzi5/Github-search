import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProfileService } from "./profiles/profile.service";
import { AlertsService } from "./alert-service/alerts.service";
import { FormsModule } from "@angular/forms";
import {FormComponent}from '../form/form.component'
@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],

  providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
