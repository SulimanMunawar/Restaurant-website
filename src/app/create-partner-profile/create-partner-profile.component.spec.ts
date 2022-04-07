import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePartnerProfileComponent } from './create-partner-profile.component';

describe('CreatePartnerProfileComponent', () => {
  let component: CreatePartnerProfileComponent;
  let fixture: ComponentFixture<CreatePartnerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePartnerProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePartnerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
