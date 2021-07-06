import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginWithOTPComponent } from './admin-login-with-otp.component';

describe('AdminLoginWithOTPComponent', () => {
  let component: AdminLoginWithOTPComponent;
  let fixture: ComponentFixture<AdminLoginWithOTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLoginWithOTPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginWithOTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
