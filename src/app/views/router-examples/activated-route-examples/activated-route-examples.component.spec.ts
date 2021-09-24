import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRouteExamplesComponent } from './activated-route-examples.component';

describe('ActivatedRouteExamplesComponent', () => {
  let component: ActivatedRouteExamplesComponent;
  let fixture: ComponentFixture<ActivatedRouteExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivatedRouteExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatedRouteExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
