import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryExamplesComponent } from './factory-examples.component';

describe('FactoryExamplesComponent', () => {
  let component: FactoryExamplesComponent;
  let fixture: ComponentFixture<FactoryExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactoryExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
