import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponentHostComponent } from './footer-component-host.component';

describe('FooterComponentHostComponent', () => {
  let component: FooterComponentHostComponent;
  let fixture: ComponentFixture<FooterComponentHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponentHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponentHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
