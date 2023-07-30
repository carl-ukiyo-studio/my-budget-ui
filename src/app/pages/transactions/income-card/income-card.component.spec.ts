import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeCardComponent } from './income-card.component';

describe('IncomeCardItemComponent', () => {
  let component: IncomeCardComponent;
  let fixture: ComponentFixture<IncomeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IncomeCardComponent]
    });
    fixture = TestBed.createComponent(IncomeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
