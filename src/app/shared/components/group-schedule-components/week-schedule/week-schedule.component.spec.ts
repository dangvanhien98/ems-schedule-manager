import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScheduleContent } from '../../../../store/models/schedule_content.i';
import { MaterialCustomModule } from '../../../material-custom/material-custom.module';
import { DayScheduleModule } from '../day-schedule/day-schedule.module';

import { WeekScheduleComponent } from './week-schedule.component';
import * as date from 'date-fns';

describe('WeekScheduleComponent', () => {
  let component: WeekScheduleComponent;
  let fixture: ComponentFixture<WeekScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeekScheduleComponent],
      imports: [
        CommonModule,
        MaterialCustomModule,
        FlexLayoutModule,
        DayScheduleModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekScheduleComponent);
    component = fixture.componentInstance;
    component.listDataSchedule = listDataSchedule;
    component.dayFirstInWeek = new Date();
    component.userId = 1;
    fixture.detectChanges();
  });
  const listDataSchedule: ScheduleContent[] = [
    {
      scheduleId: 1,
      title:
        'Correspondence such as e-mail, review of proposal materials at each site',
      timeStart: new Date('01/14/2021 10:00'),
      dueTime: new Date('01/14/2021 20:00'),
      typeSchedule: 'Meeting',
      typeRepeat: 'everyday',
      isWarning: false,
    },
    {
      scheduleId: 2,
      title:
        'Correspondence such as e-mail, review of proposal materials at each site',
      timeStart: new Date('01/14/2021 08:00'),
      dueTime: new Date('01/14/2021 15:00'),
      typeSchedule: 'Meeting',
      typeRepeat: 'normal',
      isWarning: false,
    },
  ];
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('emit data', () => {
    it('addSchedule', () => {
      const spy = spyOn(component.addSchedule, 'emit');
      component.clickAddSchedule(1);
      expect(spy).toHaveBeenCalledWith(1);
    });
    it('addTodo', () => {
      const spy = spyOn(component.addTodo, 'emit');
      component.clickAddTodo(1);
      expect(spy).toHaveBeenCalledWith(1);
    });
    it('addTodo', () => {
      const spy = spyOn(component.scheduleId, 'emit');
      component.getDetail(1);
      expect(spy).toHaveBeenCalledWith(1);
    });
  });
  describe('arrayDayInWeek', () => {
    it('arrayDayInWeek', () => {
      const spy = jest.spyOn(date, 'addDays');
      const spy1 = spyOn(component.listDayInWeek, 'push');
      let dayInWeek = component.dayFirstInWeek;
      component.arrayDayInWeek(component.dayFirstInWeek);
      expect(spy1).toHaveBeenCalledWith(dayInWeek);
      expect(spy).toHaveBeenCalledWith(dayInWeek, 1);
    });
  });
  describe('ngOnInit', () => {
    it('ngOnInit', () => {
     component.arrayDayInWeek(component.dayFirstInWeek);
    });
  });
});
