import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcludeComponent } from './conclude.component';

describe('ConcludeComponent', () => {
  let component: ConcludeComponent;
  let fixture: ComponentFixture<ConcludeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcludeComponent]
    });
    fixture = TestBed.createComponent(ConcludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
