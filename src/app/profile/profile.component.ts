import { GitService } from "../gits/git.service";
import { Component, OnInit } from "@angular/core";
import { User } from "../user";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  providers: [GitService], //add the providers to the component
  styleUrls: ["./git.component.css"]
})
export class GitComponent implements OnInit {
  gits: any;
  constructor(gitService: GitService) {
    this.gits = gitService.getGits();
  }
  ngOnInit() {}
}
