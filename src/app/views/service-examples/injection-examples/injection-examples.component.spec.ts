import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionExamplesComponent } from './injection-examples.component';

describe('InjectionExamplesComponent', () => {
  let component: InjectionExamplesComponent;
  let fixture: ComponentFixture<InjectionExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectionExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectionExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
