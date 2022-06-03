import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit, OnChanges {
  @Input() errorMessageVisible: boolean = false;
  @Input() errorMessageText: string = '';

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {}
}
