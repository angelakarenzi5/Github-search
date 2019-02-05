import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../services/profile.service";

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.css"]
})
export class SearchFormComponent implements OnInit {
  submitSearch(name) {
    this.profileService.getProfileInfo(name.target.value);
    this.repositoryService.getRepositoryInfo(name.target.value);
    this.profileService.getProfileInfo(name.target.value);
    this.profileService.getProfileInfo(name.target.value);
    this.profileService.getProfileInfo(name.target.value);
  }
  constructor(
    private profileService: ProfileService,
    private repositoryService: ProfileService
  ) {}
  ngOnInit() {}
}