import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IButtonGroup } from '../../../../store/models/button-group.i';
import { LabelInterface } from '../../../../store/models/label.i';
import { LabelledValue } from '../../../../store/models/labelvalue.i';

@Component({
  selector: 'brc-header-page-group-week',
  templateUrl: './header-page-group-week.component.html',
  styleUrls: ['./header-page-group-week.component.scss'],
})
export class HeaderPageGroupWeekComponent implements OnInit {
  @Input() labelHeader: LabelInterface;
  @Input() dataSelect: LabelledValue<string>[] = [];
  @Input() placeholder: string;
  @Input() buttonGroup: IButtonGroup<string>[];
  @Input() dateCurrent: Date;
  @Output() valueButtonGroup: EventEmitter<Date> = new EventEmitter();
  @Output() getValueSelect = new EventEmitter<string>();
  @Output() dailySchedule: EventEmitter<any> = new EventEmitter<any>();
  @Output() firstDayOfWeek: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void { }

  onValueButtonGroup(data) {
    this.dateCurrent = data;
    this.valueButtonGroup.emit(data);
  }
  onGetValueSelect(data) {
    this.getValueSelect.emit(data);
  }
  onDailySchedule(data) {
    this.dailySchedule.emit(data);
  }
  onFirstDayOfWeek(data) {
    this.dateCurrent = data;
    this.firstDayOfWeek.emit(data);
  }
}
