import { Component, OnInit } from '@angular/core';
import { GitService } from '../gits/git.service';
import {User} from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[GitService]
})
export class ProfileComponent implements OnInit {
  user: User;
  
 constructor(private profileService: GitService, public repoService: GitService) { 
 this.user = this.profileService.user;
 }
  ngOnInit() {
    this.user = this.profileService.user;

  }

}
