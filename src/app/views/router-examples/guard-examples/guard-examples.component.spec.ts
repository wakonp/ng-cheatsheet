import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardExamplesComponent } from './guard-examples.component';

describe('GuardExamplesComponent', () => {
  let component: GuardExamplesComponent;
  let fixture: ComponentFixture<GuardExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
