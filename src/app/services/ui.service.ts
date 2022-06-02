import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showPositionForm: boolean = false;
  private subject = new Subject<any>();
  constructor() {}

  togglePositionForm(): void {
    this.showPositionForm = !this.showPositionForm;
    this.subject.next(this.showPositionForm);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
