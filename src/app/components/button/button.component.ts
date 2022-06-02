import { Subscription } from 'rxjs';
import { WorkingModeService } from './../../services/working-mode.service';
import { WorkingMode } from './../../enums/working-mode';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit, OnDestroy {
  @Input() buttonText: string = '';
  @Input() buttonWorkingMode!: WorkingMode | undefined;
  @Output() btnClick = new EventEmitter();

  currentWorkingMode: WorkingMode = WorkingMode.RealTimeModel;
  workingModeSubscription!: Subscription;

  constructor(private workingModeService: WorkingModeService) {}

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

  handleBtnClick(): void {
    this.btnClick.emit();
  }
}
