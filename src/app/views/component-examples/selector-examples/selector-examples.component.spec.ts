import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorExamplesComponent } from './selector-examples.component';

describe('SelectorExamplesComponent', () => {
  let component: SelectorExamplesComponent;
  let fixture: ComponentFixture<SelectorExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
