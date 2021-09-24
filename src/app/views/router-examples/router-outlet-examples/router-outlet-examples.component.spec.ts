import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterOutletExamplesComponent } from './router-outlet-examples.component';

describe('RouterOutletExamplesComponent', () => {
  let component: RouterOutletExamplesComponent;
  let fixture: ComponentFixture<RouterOutletExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterOutletExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterOutletExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
