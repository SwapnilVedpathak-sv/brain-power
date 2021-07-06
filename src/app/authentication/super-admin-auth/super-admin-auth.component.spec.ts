import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminAuthComponent } from './super-admin-auth.component';

describe('SuperAdminAuthComponent', () => {
  let component: SuperAdminAuthComponent;
  let fixture: ComponentFixture<SuperAdminAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
