import { Subject, Observable } from 'rxjs';
import { WorkingMode } from './../enums/working-mode';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorkingModeService {
  private workingMode = WorkingMode.RealTimeModel;
  private subject = new Subject<any>();
  constructor() {}

  changeWorkingMode(newWorkingMode: WorkingMode): void {
    this.workingMode = newWorkingMode;
    this.subject.next(this.workingMode);
  }

  onWorkingModeChange(): Observable<any> {
    return this.subject.asObservable();
  }
}
