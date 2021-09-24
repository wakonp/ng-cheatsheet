import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentExtensionExamplesComponent } from './component-extension-examples.component';

describe('ComponentExtensionExamplesComponent', () => {
  let component: ComponentExtensionExamplesComponent;
  let fixture: ComponentFixture<ComponentExtensionExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentExtensionExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentExtensionExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
