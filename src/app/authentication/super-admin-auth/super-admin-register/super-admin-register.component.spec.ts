import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminRegisterComponent } from './super-admin-register.component';

describe('SuperAdminRegisterComponent', () => {
  let component: SuperAdminRegisterComponent;
  let fixture: ComponentFixture<SuperAdminRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
