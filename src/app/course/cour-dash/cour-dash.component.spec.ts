import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourDashComponent } from './cour-dash.component';

describe('CourDashComponent', () => {
  let component: CourDashComponent;
  let fixture: ComponentFixture<CourDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
