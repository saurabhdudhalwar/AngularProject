import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourEditComponent } from './cour-edit.component';

describe('CourEditComponent', () => {
  let component: CourEditComponent;
  let fixture: ComponentFixture<CourEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
