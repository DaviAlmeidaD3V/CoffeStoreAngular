import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoastedComponent } from './roasted.component';

describe('RoastedComponent', () => {
  let component: RoastedComponent;
  let fixture: ComponentFixture<RoastedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoastedComponent]
    });
    fixture = TestBed.createComponent(RoastedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
