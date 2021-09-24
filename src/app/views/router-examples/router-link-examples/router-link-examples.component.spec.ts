import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterLinkExamplesComponent } from './router-link-examples.component';

describe('RouterLinkExamplesComponent', () => {
  let component: RouterLinkExamplesComponent;
  let fixture: ComponentFixture<RouterLinkExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterLinkExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterLinkExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
