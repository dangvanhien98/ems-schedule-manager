import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { IButtonGroup } from '../../../../store/models/button-group.i';
import { LabelInterface } from '../../../../store/models/label.i';
import { LabelledValue } from '../../../../store/models/labelvalue.i';
import { ListScheduleContent } from '../../../../store/models/list-schedule-content';

@Component({
  selector: 'brc-group-day-all',
  templateUrl: './group-day-all.component.html',
  styleUrls: ['./group-day-all.component.scss']
})
export class GroupDayAllComponent implements OnInit {

  /*Input header-page-group-day*/
  @Input() labelHeader: LabelInterface;
  @Input() dataSelect: LabelledValue<string>[] = [];
  @Input() placeholder: string;
  @Input() buttonGroup: IButtonGroup<string>[];
  @Input() dateCurrent: Date; 
  @Input() listDataSchedule: ListScheduleContent[] = [];
  /*Input pagination*/
  @Input() pageSize: number;
  @Input() total: number;
  @Input() pageIndex: number = 0;
  /*Output pagination*/
  @Output() onPageChange = new EventEmitter();
  /*Output group-day-person-board*/
  @Output() month: EventEmitter<object> = new EventEmitter<object>();
  @Output() phone: EventEmitter<string> = new EventEmitter<string>();
  @Output() btnAddTodo: EventEmitter<string> = new EventEmitter<string>();
  @Output() userDetail: EventEmitter<number> = new EventEmitter<number>();
  @Output() scheduleId: EventEmitter<Number> = new EventEmitter();
  @Output() addSchedule: EventEmitter<number> = new EventEmitter<number>();
  @Output() addTodo: EventEmitter<number> = new EventEmitter<number>();
  /*Output header-page-group-day*/
  @Output() valueButtonGroup: EventEmitter<Date> = new EventEmitter();
  @Output() getValueSelect = new EventEmitter<string>();
  isSticky: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 50;
  }

  getMinuteWithHours(d: Date): number {
    return d !== undefined ? d.getHours() * 60 + d.getMinutes() : 0;
  }

  getStartHour() {
    let arrStartTime = [];
    this.listDataSchedule.map(detail => detail.detailSchedule
      .map(data => {
        arrStartTime.push(data.timeStart.getHours());
      }))
    return Math.min.apply(Math, arrStartTime);
  }
  getEndHour() {
    let arrDueTime = [];
    this.listDataSchedule.map(detail => detail.detailSchedule
      .map(data => {
        arrDueTime.push(this.getMinuteWithHours(data.dueTime));
      }))
    let maxEndHour = Math.max.apply(Math, arrDueTime);
    if (maxEndHour % 60 != 0) {
      return maxEndHour / 60;
    }
    return maxEndHour / 60;
  }

  onValueButtonGroup(data) {
    this.dateCurrent = data;
    this.valueButtonGroup.emit(data);
  }
  onGetValueSelect(data) {
    this.getValueSelect.emit(data);
  }
  onMonth(data) {
    this.month.emit(data);
  }
  onPhone(data) {
    this.phone.emit(data);
  }
  onBtnAddTodo(data) {
    this.btnAddTodo.emit(data);
  }
  onUserDetail(data) {
    this.userDetail.emit(data);
  }
  onScheduleId(data) {
    this.scheduleId.emit(data);
  }
  onAddSchedule(data) {
    this.addSchedule.emit(data);
  }
  onAddTodo(data) {
    this.addTodo.emit(data);
  }
  onPageEvent(data: number) {
    this.onPageChange.emit(data);
  }
}
