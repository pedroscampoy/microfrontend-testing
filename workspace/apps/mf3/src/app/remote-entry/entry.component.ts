import { Component } from '@angular/core';
import { UserService } from '@workspace/shared/data-access-user';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mf3-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class RemoteEntryComponent {
  username = '';
  password = '';

  isLoggedIn$ = this.userService.isUserLoggedIn$;

  constructor(private userService: UserService) {}

  login() {
    this.userService.checkCredentials(this.username, this.password);
  }

  logout() {
    this.userService.logout();
  }

}
