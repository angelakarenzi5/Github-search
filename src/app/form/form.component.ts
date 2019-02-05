import { Component, OnInit } from "@angular/core";
import { GitService } from "../gits/git.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  submitSearch(name) {
   this.gitService.getProfileInfo(name.target.value);
   this.repositoryService.getRepoInfo(name.target.value);
  }
  constructor(
    private gitService: GitService,
    private repositoryService: GitService
  ) {}
  ngOnInit() {}
}