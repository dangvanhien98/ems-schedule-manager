import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { addDays, endOfWeek } from 'date-fns';
import { IButtonGroup } from '../../../../store/models/button-group.i';

@Component({
  selector: 'brc-button-group-schedule',
  templateUrl: './button-group-schedule.component.html',
  styleUrls: ['./button-group-schedule.component.scss'],
})
export class ButtonGroupScheduleComponent implements OnInit {
  @Input() buttonGroup: IButtonGroup<string>[];
  @Input() date: Date;
  @Output() valueButtonGroup: EventEmitter<Date> = new EventEmitter();
  valueToDay = 'today';
  valueNextDay = 'next day';
  valueNextWeek = 'next week';
  valueTheDayBefore = 'before day';
  valueLastWeek = 'last week';
  constructor() {}

  ngOnInit(): void {
    this.valueButtonGroup.emit(this.date);
  }

  onClick(value: string) {
    if (value === this.valueToDay) {
      this.date = new Date();
      this.valueButtonGroup.emit(this.date);
    } else if (value === this.valueNextDay) {
      this.date = addDays(this.date, 1);
      this.valueButtonGroup.emit(this.date);
    } else if (value === this.valueTheDayBefore) {
      this.date = addDays(this.date, -1);
      this.valueButtonGroup.emit(this.date);
    } else if (value === this.valueLastWeek) {
      if (this.date.getDay() == 0) {
        this.date = addDays(this.date, -7);
      } else {
        this.date = addDays(endOfWeek(this.date), -6);
      }
      this.valueButtonGroup.emit(this.date);
    } else {
      this.date = addDays(endOfWeek(this.date), 1);
      this.valueButtonGroup.emit(this.date);
    }
  }
}
