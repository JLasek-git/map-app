import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private zoomInSubject = new Subject<any>();
  private zoomOutSubject = new Subject<any>();
  private changePositionSubject = new Subject<any>();

  constructor() {}

  zoomInClicked(): void {
    this.zoomInSubject.next(1);
  }

  zoomOutClicked(): void {
    this.zoomOutSubject.next(1);
  }

  changePosition(newPosition: L.LatLng): void {
    this.changePositionSubject.next(newPosition);
  }

  onZoomInClick(): Observable<any> {
    return this.zoomInSubject.asObservable();
  }

  onZoomOutClicked(): Observable<any> {
    return this.zoomOutSubject.asObservable();
  }

  onChangePosition(): Observable<any> {
    return this.changePositionSubject.asObservable();
  }
}
