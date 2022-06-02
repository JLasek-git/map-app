import { WorkingModeService } from './../../services/working-mode.service';
import { WorkingMode } from 'src/app/enums/working-mode';
import { MapService } from './../../services/map.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  WorkingModeEnum = WorkingMode;
  currentWorkingMode: WorkingMode = WorkingMode.RealTimeModel;

  constructor(
    private mapService: MapService,
    private workingModeService: WorkingModeService
  ) {}

  ngOnInit(): void {
    this.workingModeService.onWorkingModeChange().subscribe((value) => {
      this.currentWorkingMode = value;
    });
  }

  handleZoomInClicked(): void {
    this.mapService.zoomInClicked();
  }

  handleZoomOutClicked(): void {
    this.mapService.zoomOutClicked();
  }

  toggleChangePositionForm(): void {
    this.currentWorkingMode = this.WorkingModeEnum.ChangeCords;
    this.changeWorkingMode();
  }

  changeWorkingMode(): void {
    this.workingModeService.changeWorkingMode(this.currentWorkingMode);
  }

  toggleRealTimeModel() {
    this.currentWorkingMode = this.WorkingModeEnum.RealTimeModel;
    this.changeWorkingMode();
  }

  togglePolygonCreator() {
    this.currentWorkingMode = this.WorkingModeEnum.PolygonCreator;
    this.changeWorkingMode();
  }
}
