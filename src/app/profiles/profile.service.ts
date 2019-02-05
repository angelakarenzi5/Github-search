import { Injectable } from '@angular/core';
import {profiles} from "../profiles/profile.service"

@Injectable()
export class ProfileService {
  getProfiles(){
    return profiles;
  }
}
