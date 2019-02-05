import { GitService } from "../gits/git.service";
import { Component, OnInit } from "@angular/core";
import { User } from "../user-class/user";
import {HttpClient} from '@angular/common/http';


@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  providers: [GitService], //add the providers to the component
  styleUrls: ["./git.component.css"]
})
export class GitComponent implements OnInit {
  user:User;

  gits: any;

  constructor(gitService:GitService,alertService:AlertsService,private http:HttpClient) {
    this.gits = gitService.getGits();
    this.alertService = alertService;
     }
     ngOnInit() {

      interface ApiResponse{
        user:string;
        author:string
      }
      this.http.get<ApiResponse>("https://talaikis.com/api/quotes/random/").subscribe(data=>{
        this.user= new User(data.user,data.author)

    },err=>{
        this.user= new User("Never, never, never give up.","winston churchill")
        console.log("Error occured ")
    })
  }

}
