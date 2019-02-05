import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ProfileService } from "./services/profile.service";
import { FormComponent } from "./form/form.component";
import { AppComponent } from "./app.component";
import { ProfileComponent } from "./profile/profile.component";
// import { FormComponent } from "./form/form";


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FormComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule {}