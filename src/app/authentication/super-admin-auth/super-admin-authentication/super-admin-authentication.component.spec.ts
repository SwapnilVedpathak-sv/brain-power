import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminAuthenticationComponent } from './super-admin-authentication.component';

describe('SuperAdminAuthenticationComponent', () => {
  let component: SuperAdminAuthenticationComponent;
  let fixture: ComponentFixture<SuperAdminAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminAuthenticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
