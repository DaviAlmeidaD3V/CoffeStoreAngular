import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBarComponent } from './register-bar.component';

describe('RegisterBarComponent', () => {
  let component: RegisterBarComponent;
  let fixture: ComponentFixture<RegisterBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterBarComponent]
    });
    fixture = TestBed.createComponent(RegisterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
