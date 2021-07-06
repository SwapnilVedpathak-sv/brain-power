import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminLoginWithOTPComponent } from './super-admin-login-with-otp.component';

describe('SuperAdminLoginWithOTPComponent', () => {
  let component: SuperAdminLoginWithOTPComponent;
  let fixture: ComponentFixture<SuperAdminLoginWithOTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminLoginWithOTPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminLoginWithOTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
