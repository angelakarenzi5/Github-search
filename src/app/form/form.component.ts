import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../services/profile.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
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