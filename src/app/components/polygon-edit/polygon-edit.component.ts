import { WorkingModeService } from './../../services/working-mode.service';
import { Subscription } from 'rxjs';
import { WorkingMode } from './../../enums/working-mode';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-polygon-edit',
  templateUrl: './polygon-edit.component.html',
  styleUrls: ['./polygon-edit.component.scss'],
})
export class PolygonEditComponent implements OnInit {
  @Output() polygonEditModeChanged: EventEmitter<boolean> = new EventEmitter();
  isPolygonEditActive: boolean = false;

  workingModeSubscription!: Subscription;

  constructor(private workingModeService: WorkingModeService) {}

  ngOnInit(): void {
    this.workingModeSubscription = this.workingModeService
      .onWorkingModeChange()
      .subscribe((value) => {
        if (value !== WorkingMode.PolygonCreator) {
          this.isPolygonEditActive = false;
          this.handlePolygonEditModeChange();
        }
      });
  }

  handlePolygonEditModeChange(): void {
    this.isPolygonEditActive = !this.isPolygonEditActive;
    this.polygonEditModeChanged.emit(this.isPolygonEditActive);
  }
}
