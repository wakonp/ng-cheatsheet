import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorExamplesComponent } from './decorator-examples.component';

describe('DecoratorExamplesComponent', () => {
  let component: DecoratorExamplesComponent;
  let fixture: ComponentFixture<DecoratorExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecoratorExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
