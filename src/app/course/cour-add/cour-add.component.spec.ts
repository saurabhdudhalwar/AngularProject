import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourAddComponent } from './cour-add.component';

describe('CourAddComponent', () => {
  let component: CourAddComponent;
  let fixture: ComponentFixture<CourAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
