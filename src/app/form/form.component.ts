import { Component, OnInit } from '@angular/core';
import { GitService } from '../gits/git.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  submitSearch(name) {
    this.profileService.getProfileInfo(name.target.value);
    this.repoService.getRepoInfo(name.target.value);
  }
   constructor(private profileService: GitService, private repoService: GitService) { }
  ngOnInit() {
  }
 }