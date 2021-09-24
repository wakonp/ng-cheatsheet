import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveExamplesComponent } from './structural-directive-examples.component';

describe('StructuralDirectiveExamplesComponent', () => {
  let component: StructuralDirectiveExamplesComponent;
  let fixture: ComponentFixture<StructuralDirectiveExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralDirectiveExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirectiveExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
