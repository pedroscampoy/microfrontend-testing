import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRemoteComponent } from './footer-remote.component';

describe('FooterRemoteComponent', () => {
  let component: FooterRemoteComponent;
  let fixture: ComponentFixture<FooterRemoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterRemoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterRemoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
