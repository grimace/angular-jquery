import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorAnimationComponent } from './color-animation.component';

describe('ColorAnimationComponent', () => {
  let component: ColorAnimationComponent;
  let fixture: ComponentFixture<ColorAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
