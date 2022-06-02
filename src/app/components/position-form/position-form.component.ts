import { Subscription } from 'rxjs';
import { UiService } from './../../services/ui.service';
import { MapService } from './../../services/map.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as L from 'leaflet';

@Component({
  selector: 'app-position-form',
  templateUrl: './position-form.component.html',
  styleUrls: ['./position-form.component.scss'],
})
export class PositionFormComponent implements OnInit {
  coordinatesForm: FormGroup = new FormGroup({
    lng: new FormControl(''),
    lat: new FormControl(''),
  });

  subscription!: Subscription;
  showPositionForm!: boolean;

  constructor(private mapService: MapService, private uiService: UiService) {}

  ngOnInit(): void {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showPositionForm = value;
    });
  }

  onSubmit(): void {
    console.log(this.coordinatesForm);
    const newPosition: L.LatLng = new L.LatLng(
      Number(this.coordinatesForm.value.lat),
      Number(this.coordinatesForm.value.lng)
    );
    this.mapService.changePosition(newPosition);
    this.uiService.togglePositionForm();
  }
}
