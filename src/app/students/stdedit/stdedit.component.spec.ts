import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdeditComponent } from './stdedit.component';

describe('StdeditComponent', () => {
  let component: StdeditComponent;
  let fixture: ComponentFixture<StdeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
