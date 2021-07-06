import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginWithPasswordComponent } from './user-login-with-password.component';

describe('UserLoginWithPasswordComponent', () => {
  let component: UserLoginWithPasswordComponent;
  let fixture: ComponentFixture<UserLoginWithPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoginWithPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginWithPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
