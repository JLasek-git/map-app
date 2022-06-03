import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-polygon-edit-button',
  templateUrl: './polygon-edit-button.component.html',
  styleUrls: ['./polygon-edit-button.component.scss'],
})
export class PolygonEditButtonComponent implements OnInit, OnDestroy {
  @Output() polygonEditModeChanged: EventEmitter<boolean> = new EventEmitter();
  isPolygonEditActive: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.handlePolygonEditModeChange();
  }

  handlePolygonEditModeChange(): void {
    this.isPolygonEditActive = !this.isPolygonEditActive;
    this.polygonEditModeChanged.emit(this.isPolygonEditActive);
  }
}
