import { MapService } from './../../services/map.service';
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  map!: L.Map;
  subscription!: Subscription;
  zoomOutSubscription!: Subscription;
  changePositionSubsciption!: Subscription;

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.initMap();
    this.subscription = this.mapService.onClick().subscribe((value) => {
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
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [50.090683, 19.974544],
      zoom: 15,
      zoomControl: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);
  }
}
