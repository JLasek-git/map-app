import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonEditComponent } from './polygon-edit.component';

describe('PolygonEditComponent', () => {
  let component: PolygonEditComponent;
  let fixture: ComponentFixture<PolygonEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolygonEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
