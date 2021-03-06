import { shakeItem } from '../../utils/shakeItem';
import { WorkingMode } from '../../enums/working-mode';
import { WorkingModeService } from '../../services/working-mode.service';
import { Subscription } from 'rxjs';
import { MapService } from '../../services/map.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as L from 'leaflet';

@Component({
  selector: 'app-coordinates-form',
  templateUrl: './coordinates-form.component.html',
  styleUrls: ['./coordinates-form.component.scss'],
})
export class CoordinatesFormComponent implements OnInit, OnDestroy {
  coordinatesForm: FormGroup = new FormGroup({
    lng: new FormControl('', [Validators.required]),
    lat: new FormControl('', [Validators.required]),
  });
  showCoordinatesForm!: boolean;
  currentWorkingMode!: WorkingMode;
  WorkingModeEnum = WorkingMode;

  coordinatesFormSubscription!: Subscription;
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

  get longitude() {
    return this.coordinatesForm.get('lng');
  }

  get latitude() {
    return this.coordinatesForm.get('lat');
  }

  closeForm(): void {
    this.workingModeService.changeWorkingMode(
      this.WorkingModeEnum.RealTimeModel
    );
    this.coordinatesForm.reset();
  }

  onSubmit(): void {
    if (!this.coordinatesForm.valid) {
      this.coordinatesForm.markAllAsTouched();
      shakeItem('input-error-container');

      return;
    }

    const newPosition: L.LatLng = new L.LatLng(
      Number(this.coordinatesForm.value.lat),
      Number(this.coordinatesForm.value.lng)
    );
    this.mapService.changePosition(newPosition);
    this.workingModeService.changeWorkingMode(
      this.WorkingModeEnum.RealTimeModel
    );
  }
}
