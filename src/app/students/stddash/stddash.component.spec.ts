import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StddashComponent } from './stddash.component';

describe('StddashComponent', () => {
  let component: StddashComponent;
  let fixture: ComponentFixture<StddashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StddashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StddashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
