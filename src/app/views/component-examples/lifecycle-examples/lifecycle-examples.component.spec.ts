import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleExamplesComponent } from './lifecycle-examples.component';

describe('LifecycleExamplesComponent', () => {
  let component: LifecycleExamplesComponent;
  let fixture: ComponentFixture<LifecycleExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecycleExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
