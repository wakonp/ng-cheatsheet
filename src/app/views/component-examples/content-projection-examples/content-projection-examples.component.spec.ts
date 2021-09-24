import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectionExamplesComponent } from './content-projection-examples.component';

describe('ContentProjectionExamplesComponent', () => {
  let component: ContentProjectionExamplesComponent;
  let fixture: ComponentFixture<ContentProjectionExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProjectionExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProjectionExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
