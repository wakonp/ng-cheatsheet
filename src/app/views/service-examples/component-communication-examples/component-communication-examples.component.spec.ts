import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCommunicationExamplesComponent } from './component-communication-examples.component';

describe('ComponentCommunicationExamplesComponent', () => {
  let component: ComponentCommunicationExamplesComponent;
  let fixture: ComponentFixture<ComponentCommunicationExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCommunicationExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCommunicationExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
