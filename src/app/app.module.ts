import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitComponent } from './profile/profile.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GitComponent,
    ProfileFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
