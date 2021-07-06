import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginWithOTPComponent } from './user-login-with-otp.component';

describe('UserLoginWithOTPComponent', () => {
  let component: UserLoginWithOTPComponent;
  let fixture: ComponentFixture<UserLoginWithOTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoginWithOTPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginWithOTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
