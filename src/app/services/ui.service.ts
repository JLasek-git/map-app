import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showPositionForm: boolean = false;
  private subject = new Subject<any>();
  constructor() {}

  closePositionForm(): void {
    this.showPositionForm = false;
    this.subject.next(this.showPositionForm);
  }

  displayPositionForm(): void {
    this.showPositionForm = true;
    this.subject.next(this.showPositionForm);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
