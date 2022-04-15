import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-micro-frontend-footer-remote',
  templateUrl: './footer-remote.component.html',
  styleUrls: ['./footer-remote.component.scss'],
})
export class FooterRemoteComponent implements OnInit {
  year = 2021;
  constructor() {}

  ngOnInit(): void {}
}
