import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminLoginWithPasswordComponent } from './super-admin-login-with-password.component';

describe('SuperAdminLoginWithPasswordComponent', () => {
  let component: SuperAdminLoginWithPasswordComponent;
  let fixture: ComponentFixture<SuperAdminLoginWithPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminLoginWithPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminLoginWithPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
