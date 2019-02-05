import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { GithubService } from "./services/profile.service";

import { AppComponent } from "./app.component";
import { ProfileComponent } from "./profile/profile.component";
// import { SearchFormComponent } from "./form/form";
import { FormComponent } from "./form/form.component";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FormComponent
    
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule {}