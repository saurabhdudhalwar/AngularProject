import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstAddComponent } from './inst-add.component';

describe('InstAddComponent', () => {
  let component: InstAddComponent;
  let fixture: ComponentFixture<InstAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
