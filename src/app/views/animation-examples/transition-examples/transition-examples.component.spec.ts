import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionExamplesComponent } from './transition-examples.component';

describe('TransitionExamplesComponent', () => {
  let component: TransitionExamplesComponent;
  let fixture: ComponentFixture<TransitionExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransitionExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
