import { Subscription } from 'rxjs';
import { WorkingMode } from './../../enums/working-mode';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { WorkingModeService } from './../../services/working-mode.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  constructor(private workingModeService: WorkingModeService) {}
  currentWorkingMode!: WorkingMode;
  WorkingModeEnum = WorkingMode;

  workingModeSubscription!: Subscription;

  ngOnInit(): void {
    this.workingModeSubscription = this.workingModeService
      .onWorkingModeChange()
      .subscribe((value) => {
        this.currentWorkingMode = value;
      });
  }

  ngOnDestroy(): void {
    this.workingModeSubscription.unsubscribe();
  }
}
