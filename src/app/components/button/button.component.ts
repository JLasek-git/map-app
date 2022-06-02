import { WorkingModeService } from './../../services/working-mode.service';
import { WorkingMode } from './../../enums/working-mode';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() buttonText: string = '';
  @Input() buttonWorkingMode!: WorkingMode | undefined;
  @Output() btnClick = new EventEmitter();
  currentWorkingMode: WorkingMode = WorkingMode.RealTimeModel;

  constructor(private workingModeService: WorkingModeService) {}

  ngOnInit(): void {
    this.workingModeService.onWorkingModeChange().subscribe((value) => {
      this.currentWorkingMode = value;
    });
  }

  handleBtnClick(): void {
    this.btnClick.emit();
  }
}
