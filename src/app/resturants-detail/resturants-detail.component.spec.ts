import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantsDetailComponent } from './resturants-detail.component';

describe('ResturantsDetailComponent', () => {
  let component: ResturantsDetailComponent;
  let fixture: ComponentFixture<ResturantsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
