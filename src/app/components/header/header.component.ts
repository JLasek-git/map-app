import { UiService } from './../../services/ui.service';
import { MapService } from './../../services/map.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private mapService: MapService, private uiService: UiService) {}

  ngOnInit(): void {}

  handleZoomInClicked(): void {
    this.mapService.zoomInClicked();
  }

  handleZoomOutClicked(): void {
    this.mapService.zoomOutClicked();
  }

  toggleChangePositionForm(): void {
    this.uiService.displayPositionForm();
  }
}
