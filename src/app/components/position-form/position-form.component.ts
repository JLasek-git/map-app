import { Subscription } from 'rxjs';
import { UiService } from './../../services/ui.service';
import { MapService } from './../../services/map.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as L from 'leaflet';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-position-form',
  templateUrl: './position-form.component.html',
  styleUrls: ['./position-form.component.scss'],
})
export class PositionFormComponent implements OnInit {
  //Data
  coordinatesForm: FormGroup = new FormGroup({
    lng: new FormControl('', [Validators.required]),
    lat: new FormControl('', [Validators.required]),
  });
  showPositionForm!: boolean;

  //Subscriptions
  subscription!: Subscription;

  constructor(private mapService: MapService, private uiService: UiService) {}

  ngOnInit(): void {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showPositionForm = value;
    });
  }

  // Getters
  get longitude() {
    return this.coordinatesForm.get('lng');
  }

  get latitude() {
    return this.coordinatesForm.get('lat');
  }

  // Functions
  closeForm(): void {
    this.uiService.closePositionForm();
    this.coordinatesForm.reset();
  }

  validateForm(): boolean {
    return !this.latitude?.invalid && !this.longitude?.invalid;
  }

  onSubmit(): void {
    if (this.validateForm()) {
      const newPosition: L.LatLng = new L.LatLng(
        Number(this.coordinatesForm.value.lat),
        Number(this.coordinatesForm.value.lng)
      );
      this.mapService.changePosition(newPosition);
      this.uiService.closePositionForm();
    } else {
      this.coordinatesForm.markAllAsTouched();
    }
  }
}
