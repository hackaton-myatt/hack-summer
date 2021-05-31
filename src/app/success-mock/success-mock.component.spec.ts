import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessMockComponent } from './success-mock.component';

describe('SuccessMockComponent', () => {
  let component: SuccessMockComponent;
  let fixture: ComponentFixture<SuccessMockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessMockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
