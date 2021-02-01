import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IButtonGroup } from '../../../../store/models/button-group.i';
import { LabelInterface } from '../../../../store/models/label.i';
import { LabelledValue } from '../../../../store/models/labelvalue.i';

@Component({
  selector: 'brc-header-schedule',
  templateUrl: './header-schedule.component.html',
  styleUrls: ['./header-schedule.component.scss'],
})
export class HeaderScheduleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() labelHeader: LabelInterface;
  @Input() data: LabelledValue<string>[] = [];
  @Input() placeholder: string;
  @Input() buttonGroup: IButtonGroup<string>[];
  @Input() date: Date;
  @Output() valueButtonGroup: EventEmitter<Date> = new EventEmitter();
  @Output() getValueSelect = new EventEmitter<string>();
  @Input() dateCurrent : Date;
  onGetValueSelect(value: string) {
    this.getValueSelect.emit(value);
  }
  onValueButtonGroup(value: Date) {
    this.dateCurrent = value;
    this.valueButtonGroup.emit(value);
  }
}
