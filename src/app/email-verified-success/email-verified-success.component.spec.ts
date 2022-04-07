import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerifiedSuccessComponent } from './email-verified-success.component';

describe('EmailVerifiedSuccessComponent', () => {
  let component: EmailVerifiedSuccessComponent;
  let fixture: ComponentFixture<EmailVerifiedSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailVerifiedSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailVerifiedSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
