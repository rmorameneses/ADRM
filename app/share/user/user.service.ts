import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {User} from "./user";
import {Config} from "../config";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {
  constructor(private _http: Http) {}

  register(user: User) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYXN0X25hbWUiOiJCb2dhcmluIiwicm9sZXMiOlsiYWRtaW5pc3RyYXRvciIsInN1cGVydmlzb3IiLCJ1c2VyIl0sImVtYWlsIjoiamJvZ2FyaW5AYWx0dXMuY28uY3IiLCJpZCI6MSwiZmlyc3RfbmFtZSI6Ikpvc2UgTWF1cmljaW8iLCJleHAiOjE1MDY0NjE2NjcsInVzZXJuYW1lIjoiamJvZ2FyaW4ifQ.Zu5LpGkX3AKwdKgCcsumqSFxk_f9pEdWFG4BIN5rZQs");

    return this._http.post(
      Config.apiUrl,
      JSON.stringify({
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        auth_backend: 1,
        password: user.password
      }),
      { headers: headers }
    )
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}