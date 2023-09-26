import { Component, OnInit } from '@angular/core';
import { UserService } from '@workspace/shared/data-access-user';


@Component({
  selector: 'workspace-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn$ = this.userService.isUserLoggedIn$;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}
}
