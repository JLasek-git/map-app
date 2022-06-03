import { WorkingMode } from './../../enums/working-mode';
import { WorkingModeService } from './../../services/working-mode.service';
import { MapService } from './../../services/map.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as L from 'leaflet';
import '@geoman-io/leaflet-geoman-free';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy {
  map!: L.Map;
  currentWorkingMode!: WorkingMode;
  WorkingModeEnum = WorkingMode;
  isPolygonEditActive: boolean = false;

  zoomInSubscription!: Subscription;
  zoomOutSubscription!: Subscription;
  changePositionSubsciption!: Subscription;
  workingModeChangeSubscription!: Subscription;

  constructor(
    private mapService: MapService,
    private workingModeService: WorkingModeService
  ) {}

  ngOnInit(): void {
    this.initMap();
    this.zoomInSubscription = this.mapService
      .onZoomInClick()
      .subscribe((value) => {
        this.map.zoomIn(value);
      });

    this.zoomOutSubscription = this.mapService
      .onZoomOutClicked()
      .subscribe((value) => {
        this.map.zoomOut(value);
      });

    this.changePositionSubsciption = this.mapService
      .onChangePosition()
      .subscribe((value) => {
        this.map.panTo(value);
      });

    this.workingModeChangeSubscription = this.workingModeService
      .onWorkingModeChange()
      .subscribe((value) => {
        this.currentWorkingMode = value;
        this.isPolygonEditActive = false;
        if (value !== WorkingMode.PolygonCreator) {
          this.disableDrawPolygon();
          return;
        }
        this.enableDrawPolygon();
      });
  }

  ngOnDestroy(): void {
    this.zoomInSubscription.unsubscribe();
    this.zoomOutSubscription.unsubscribe();
    this.changePositionSubsciption.unsubscribe();
    this.workingModeChangeSubscription.unsubscribe();
  }

  enableDrawPolygon(): void {
    this.map.pm.enableDraw('Polygon', {
      snappable: true,
      snapDistance: 20,
      continueDrawing: true,
      allowSelfIntersection: true,
      tooltips: false,
    });
  }

  togglePolygonEditMode(isEditActive: boolean): void {
    this.isPolygonEditActive = isEditActive;
    this.map.pm.toggleGlobalEditMode();

    if (this.isPolygonEditActive) {
      this.disableDrawPolygon();
    } else {
      this.enableDrawPolygon();
    }
  }

  disableDrawPolygon(): void {
    this.map.pm.disableDraw();
  }

  private initMap(): void {
    this.map = L.map('map', { zoomControl: false }).setView(
      [50.090683, 19.974544],
      14
    );

    this.map.on('pm:create', (e) => {
      const layer = e.layer;

      if (layer instanceof L.Polygon) {
        layer.setStyle({ fillColor: 'transparent' });
      }
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);
  }
}
