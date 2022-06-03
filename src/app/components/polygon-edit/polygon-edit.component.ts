import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-polygon-edit',
  templateUrl: './polygon-edit.component.html',
  styleUrls: ['./polygon-edit.component.scss'],
})
export class PolygonEditComponent implements OnInit, OnDestroy {
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
