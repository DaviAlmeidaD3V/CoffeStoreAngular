import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoSlideComponent } from './promo-slide.component';

describe('PromoSlideComponent', () => {
  let component: PromoSlideComponent;
  let fixture: ComponentFixture<PromoSlideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromoSlideComponent]
    });
    fixture = TestBed.createComponent(PromoSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
