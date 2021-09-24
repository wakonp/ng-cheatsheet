import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulationExamplesComponent } from './view-encapsulation-examples.component';

describe('ViewEncapsulationExamplesComponent', () => {
  let component: ViewEncapsulationExamplesComponent;
  let fixture: ComponentFixture<ViewEncapsulationExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEncapsulationExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEncapsulationExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
