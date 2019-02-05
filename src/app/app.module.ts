import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { GitService } from "./gits/git.service";
import { FormComponent } from "./form/form.component";
import { AppComponent } from "./app.component";
import { ProfileComponent } from "./profile/profile.component";
// import { FormComponent } from "./form/form";
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FormComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule {}