import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-mfe-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.scss']
})
export class FooterComponentComponent implements OnInit {
  year = 2021;

  constructor() { }

  ngOnInit(): void {
  }

}
