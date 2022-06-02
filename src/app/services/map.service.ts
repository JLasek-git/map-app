import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private subject = new Subject<any>();
  private zoomOutSubject = new Subject<any>();
  private changePositionSubject = new Subject<any>();

  constructor() {}

  zoomInClicked(): void {
    this.subject.next(1);
  }

  zoomOutClicked(): void {
    this.zoomOutSubject.next(1);
  }

  changePosition(newPosition: L.LatLng): void {
    this.changePositionSubject.next(newPosition);
  }

  onClick(): Observable<any> {
    return this.subject.asObservable();
  }

  onZoomOutClicked(): Observable<any> {
    return this.zoomOutSubject.asObservable();
  }

  onChangePosition(): Observable<any> {
    return this.changePositionSubject.asObservable();
  }
}
