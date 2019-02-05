import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profiles/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  profiles:Profile[];
  constructor(profileService:ProfileService) {
  this.profiles = profileService.getProfiles()
   }
  ngOnInit() {
  }

}
