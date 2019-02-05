import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../user-class/user";
import { environment } from "../../environments/environment";
import { Repository } from "../repository-class/repository";
import { NumberSymbol } from "@angular/common";

@Injectable({
  providedIn: "root" //we declare that this service should be created by the root application injector.
})
export class GithubService {
  repository: Repository;
  user: User;

  private username: string;
  items;
  constructor(private http: HttpClient) {
    console.log("service is now ready!");
    this.username = "Anaissimpz";
    this.user = new User(" ", " ", " ", " ", " ", " ", 0, 0, 0);
    this.repository = new Repository(" ", " ", " ", " ", " ");
  }
  getProfileInfo(username) {
    interface ApiResponse {
      name: string;
      login: string;
      avatar_url: string;
      email: string;
      location: string;
      public_repos: number;
      html_url: string;
      followers: number;
      following: number;
      // return this.http.get("https://api.github.com/users/" + this.username)
    }
    const promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(environment.apiUrl + username + environment.apikey)
        .toPromise()
        .then(profile => {
          this.user.name = profile.name;
          this.user.login = profile.login;
          this.user.avatar_url = profile.avatar_url;
          this.user.email = profile.email;
          this.user.location = profile.location;
          this.user.public_repository = profile.public_repos;
          this.user.html_url = profile.html_url;
          this.user.followers = profile.followers;
          this.user.following = profile.following;

          console.log(profile);
          resolve();
        });
    });
    return promise;
  }
  getRepoInfo(username) {
    interface ApiResponse {
      name: string;
      homepage: string;
      description: string;
      html_url: string;
      clone_url: string;
    }
    this.http
      .get<ApiResponse>(environment.apiUrl + username + environment.apiRepokey)
      .subscribe(response => {
        this.items = response;
      });
  }
}