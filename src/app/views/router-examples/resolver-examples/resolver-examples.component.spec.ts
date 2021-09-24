import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolverExamplesComponent } from './resolver-examples.component';

describe('ResolverExamplesComponent', () => {
  let component: ResolverExamplesComponent;
  let fixture: ComponentFixture<ResolverExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolverExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolverExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
