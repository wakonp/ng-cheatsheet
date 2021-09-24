import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaggerExamplesComponent } from './stagger-examples.component';

describe('StaggerExamplesComponent', () => {
  let component: StaggerExamplesComponent;
  let fixture: ComponentFixture<StaggerExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaggerExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaggerExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
