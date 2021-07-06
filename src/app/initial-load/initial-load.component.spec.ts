import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialLoadComponent } from './initial-load.component';

describe('InitialLoadComponent', () => {
  let component: InitialLoadComponent;
  let fixture: ComponentFixture<InitialLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialLoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
