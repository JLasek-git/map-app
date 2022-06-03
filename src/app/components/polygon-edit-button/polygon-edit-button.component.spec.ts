import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonEditButtonComponent } from './polygon-edit-button.component';

describe('PolygonEditButtonComponent', () => {
  let component: PolygonEditButtonComponent;
  let fixture: ComponentFixture<PolygonEditButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PolygonEditButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonEditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
