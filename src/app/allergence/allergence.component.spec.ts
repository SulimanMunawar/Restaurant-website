import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergenceComponent } from './allergence.component';

describe('AllergenceComponent', () => {
  let component: AllergenceComponent;
  let fixture: ComponentFixture<AllergenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllergenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
