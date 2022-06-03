import { Subscription } from 'rxjs';
import { WorkingModeService } from '../../services/working-mode.service';
import { WorkingMode } from 'src/app/enums/working-mode';
import { MapService } from '../../services/map.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-utility-bar',
  templateUrl: './utility-bar.component.html',
  styleUrls: ['./utility-bar.component.scss'],
})
export class UtilityBarComponent implements OnInit, OnDestroy {
  WorkingModeEnum = WorkingMode;
  currentWorkingMode: WorkingMode = WorkingMode.RealTimeModel;

  workingModeSubscription!: Subscription;

  constructor(
    private mapService: MapService,
    private workingModeService: WorkingModeService
  ) {}

  ngOnInit(): void {
    this.workingModeSubscription = this.workingModeService
      .onWorkingModeChange()
      .subscribe((value) => {
        this.currentWorkingMode = value;
      });
  }

  ngOnDestroy(): void {
    this.workingModeSubscription.unsubscribe();
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
