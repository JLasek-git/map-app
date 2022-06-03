import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-polygon-edit',
  templateUrl: './polygon-edit.component.html',
  styleUrls: ['./polygon-edit.component.scss'],
})
export class PolygonEditComponent implements OnInit {
  @Output() polygonEditButtonClicked: EventEmitter<boolean> =
    new EventEmitter();

  isPolygonEditActive: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  handlePolygonEditClick(): void {
    this.isPolygonEditActive = !this.isPolygonEditActive;
    this.polygonEditButtonClicked.emit(this.isPolygonEditActive);
  }
}
