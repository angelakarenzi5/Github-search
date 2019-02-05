import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../services/profile.service';
import {AlertsService} from '../alert-service/alerts.service';
import {HttpClient} from '@angular/common/http'
import {User} from '../user-class/user'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers:[ProfileService], 
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profiles:any[];
  alertService:AlertsService;
  constructor(profileService:ProfileService) {
  this.profiles = profileService.getProfiles()
   }   
  ngOnInit() {
  }

}
