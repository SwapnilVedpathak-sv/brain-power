import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginWithPasswordComponent } from './admin-login-with-password.component';

describe('AdminLoginWithPasswordComponent', () => {
  let component: AdminLoginWithPasswordComponent;
  let fixture: ComponentFixture<AdminLoginWithPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLoginWithPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginWithPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
