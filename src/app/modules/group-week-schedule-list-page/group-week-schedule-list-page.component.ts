import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { addDays } from 'date-fns';
import { IButtonGroup } from '../../store/models/button-group.i';
import { LabelInterface } from '../../store/models/label.i';
import { LabelledValue } from '../../store/models/labelvalue.i';
import { ListScheduleContent } from '../../store/models/list-schedule-content';
import { ScheduleGroupUserParam } from '../../store/models/schedule-group-user.i';
import { Icon } from '../../store/models/schedule_content.i';
import { StoreFacade } from '../../store/store-facades/schedule.store-facade';

@Component({
  selector: 'brc-group-week-schedule-list-page',
  templateUrl: './group-week-schedule-list-page.component.html',
  styleUrls: ['./group-week-schedule-list-page.component.scss'],
})
export class GroupWeekScheduleListPageComponent implements OnInit {
  public groupWeekTotalRecords: number = 20;
  public groupWeekRecordsPerPage: number = 3;
  public groupWeekPageIndex: number = 0;

  public labels: LabelInterface = {
    content: 'Category',
    size: 13,
    color: '',
    backgroundColor: '',
  };
  public dataSelect: LabelledValue<string>[] = [
    {
      label: 'Metting',
      value: '1',
    },
    {
      label: 'Event',
      value: '2',
    },
  ];
  public placeholder: 'category';
  public buttonGroup: IButtonGroup<string>[] = [
    {
      icon: 'fast_forward',
      value: 'next week',
      displayValue: 'next week',
    },
    {
      icon: 'skip_next',
      value: 'next day',
      displayValue: 'next day',
    },
    {
      value: 'today',
      displayValue: 'today',
    },
    {
      icon: 'skip_previous',
      value: 'before day',
      displayValue: 'before day',
    },
    {
      icon: 'fast_rewind',
      value: 'last week',
      displayValue: 'last week',
    },
  ];
  public listSchedule: ListScheduleContent[] = [];
  public icon: Icon = {
    iconStart: 'warning',
    iconEnd1: 'repeat',
    iconEnd2: 'folder_shared',
  };
  public dayFirstInWeek: Date;
  constructor(private storeFace: StoreFacade, private _router: Router) {}

  ngOnInit(): void {
    this.storeFace.getValueInitGroupWeek();
    this.dayFirstInWeek = this.storeFace.groupWeek.paramsGroupWeek.startDate;
    this.storeFace.dispatchGroupUser(
      this.storeFace.groupWeek.paginationGroupWeek,
      this.storeFace.groupWeek.paramsGroupWeek
    );

    this.groupWeekPageIndex =
      this.storeFace.groupWeek.paginationGroupWeek.page - 1;

    this.storeFace.getScheduleGroupWeek().subscribe((data) => {
      this.listSchedule = data.schedulesGroupWeek;
      this.groupWeekTotalRecords = data.paginationGroupWeek.total;
      this.groupWeekRecordsPerPage = data.paginationGroupWeek.pageSize;
    });
  }

  onClickButtonGroup(data) {
    this.dayFirstInWeek = data;
    let param: ScheduleGroupUserParam = {
      //fake director(stand second in list group week schedule) with userId = 4
      director: 4,
      startDate: data,
      endDate: addDays(data, 6),
    };
    this.storeFace.groupWeek.paramsGroupWeek = param;

    let pagination = { ...this.storeFace.groupWeek.paginationGroupWeek };
    this.storeFace.dispatchGroupUser(
      pagination,
      this.storeFace.groupWeek.paramsGroupWeek
    );
  }
  onCLickSelect(data) {
    //TODO:: Load schedule group week with category
  }
  onClickDailySchedule(data) {
    //TODO:: view group day for day
  }
  onCLickGetFirstDayOfWeek(data) {
    this.dayFirstInWeek = data;
    let param: ScheduleGroupUserParam = {
      director: 4,
      startDate: data,
      endDate: addDays(data, 6),
    };
    this.storeFace.groupWeek.paramsGroupWeek = param;
    let pagination = { ...this.storeFace.groupWeek.paginationGroupWeek };
    this.storeFace.dispatchGroupUser(
      pagination,
      this.storeFace.groupWeek.paramsGroupWeek
    );
  }
  onClickTitleSchedule(data) {
    this._router.navigate([`schedule/groupWeek/detail/${data}`]);
  }
  onClickMonthlyOfSchedule(data) {
    //TODO:: view monthly schedule for user
  }
  onClickPhoneMemoRegistration(data) {
    //TODO:: not implement
  }
  onClickBtnAddTodo(data) {
    //TODO:: not implement
  }
  onClickUserDetail(data) {
    //TODO:: view detail user
  }
  onClickAddTodo(data) {
    this._router.navigate(['todo/add']);
  }
  onCLickAddSchedule(data) {
    this._router.navigate(['schedule/add']);
  }
  onClickPageChange(data) {
    let pagination = { ...this.storeFace.groupWeek.paginationGroupWeek };
    pagination.page = Number(data.pageIndex) + 1;
    this.storeFace.dispatchGroupUser(
      pagination,
      this.storeFace.groupWeek.paramsGroupWeek
    );
  }
}
