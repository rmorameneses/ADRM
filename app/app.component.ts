import {Component} from "@angular/core";
import {User} from "./share/user/user";
import {UserService} from "./share/user/user.service";

@Component({
    selector: "my-app",
    providers: [UserService],
    templateUrl: "app.component.html"
})

export class AppComponent {
    user: User;
    isLoggingIn = true;

    constructor(private _userService: UserService) {
        this.user = new User();
    }

    submit() {
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }

    login() {
    	
    }

    signUp() {
        this._userService.register(this.user)
            .subscribe(
                () => {
                    alert("Your account was successfully created.");
                    this.toggleDisplay();
                },
                () => alert("Unfortunately we were unable to create your account.")
            );
    }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}