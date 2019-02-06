import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../user";
import { environment } from "../../environments/environment";
import { Repository } from "../repository";

@Injectable({
  providedIn: "root" //we declare that this service should be created by the root application injector.
})
export class GitService {
  repository: Repository;
  user: User;

  private username: string;
  items;
  constructor(private http: HttpClient) {
    console.log("service is now ready!");
    this.username = "Anaissimpz";
    this.user = new User(" ", " ", " ", " ", " ", 0, " ", new Date());
    this.repository = new Repository(" ", " ", " ", " ", " ", new Date());
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
      created_at: Date;
      // return this.http.get("https://api.github.com/users/" + this.username)
    }

    const promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          "https://api.github.com/users/" +
            username +
            "?access_token=a7526c4d96cf2730b17b135bc226138242a9308f"
        )
        .toPromise()
        .then(profile => {
          this.user.name = profile.name;
          this.user.login = profile.login;
          this.user.avatar_url = profile.avatar_url;
          this.user.email = profile.email;
          this.user.location = profile.location;
          this.user.public_repos = profile.public_repos;
          this.user.html_url = profile.html_url;
          this.user.created_at = profile.created_at;
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
      .get<ApiResponse>(
        "https://api.github.com/users/" +
          username +
          "/repos?access_token=e3a1f19efebed8be254463eb89ca7ab1e7739d97"
      )
      .subscribe(response => {
        this.items = response;
      });
  }
}
