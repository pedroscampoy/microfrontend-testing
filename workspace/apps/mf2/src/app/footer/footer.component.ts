import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'workspace-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  year = 2022;

  constructor() {}

  ngOnInit(): void {}
}
