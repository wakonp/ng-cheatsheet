import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionExamplesComponent } from './change-detection-examples.component';

describe('ChangeDetectionExamplesComponent', () => {
  let component: ChangeDetectionExamplesComponent;
  let fixture: ComponentFixture<ChangeDetectionExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDetectionExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
