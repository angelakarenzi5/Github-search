import { Component, OnInit } from "@angular/core";

import { User } from "../user-class/user";
import { ProfileService } from "../services/profile.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(
    private profileService: ProfileService,
    public repoService: ProfileService
  ) {
    this.user = this.profileService.user;
  }
  ngOnInit() {
    this.user = this.profileService.user;
  }
}