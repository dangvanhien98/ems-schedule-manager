import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IButtonGroup } from '../../../../store/models/button-group.i';
import { LabelInterface } from '../../../../store/models/label.i';
import { LabelledValue } from '../../../../store/models/labelvalue.i';

@Component({
  selector: 'brc-header-page-group-day',
  templateUrl: './header-page-group-day.component.html',
  styleUrls: ['./header-page-group-day.component.scss'],
})
export class HeaderPageGroupDayComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() labelHeader: LabelInterface;
  @Input() dataSelect: LabelledValue<string>[] = [];
  @Input() placeholder: string;
  @Input() buttonGroup: IButtonGroup<string>[];
  @Input() dateCurrent: Date;
  @Input() hourStart:number;
  @Input() hourEnd:number;
  @Output() valueButtonGroup: EventEmitter<Date> = new EventEmitter();
  @Output() getValueSelect = new EventEmitter<string>();

  onValueButtonGroup(data) {
    this.dateCurrent = data;
    this.valueButtonGroup.emit(data);
  }
  onGetValueSelect(data) {
    this.getValueSelect.emit(data);
  }
}
