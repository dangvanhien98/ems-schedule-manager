import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { object } from '@storybook/addon-knobs';
import { ScheduleContent } from '../../../../store/models/schedule_content.i';

import { GroupWeekPersonBoardComponent } from './group-week-person-board.component';
import { GroupWeekPersonBoardModule } from './group-week-person-board.module';

describe('GroupWeekPersonBoardComponent', () => {
  let component: GroupWeekPersonBoardComponent;
  let fixture: ComponentFixture<GroupWeekPersonBoardComponent>;
  const listDataSchedule: ScheduleContent[] = [
    {
        scheduleId: 1,
        title: "Correspondence such as e-mail, review of proposal materials at each site",
        timeStart: new Date('01/11/2021 08:00'),
        dueTime: new Date('01/11/2021 09:00'),
        typeSchedule: "Visting",
        typeRepeat: "everyday",
        users: [
            {
                categoryName: 'Nguyễn Văn A',
                categoryId: 1,
            },
            {
                categoryName: 'Dương Văn B',
                categoryId: 2,
            },
        ]
    },
    {
        scheduleId: 2,
        title: "Correspondence such as e-mail, review of proposal materials at each siting",
        timeStart: new Date('01/13/2021 10:00'),
        dueTime: new Date('01/14/2021 11:00'),
        typeSchedule: "Recruitment",
        typeRepeat: "normal",
        users: [
            {
                categoryName: 'Nguyễn Văn A',
                categoryId: 1,
            },
            {
                categoryName: 'Dương Văn B',
                categoryId: 2,
            },
        ]
    },
    {
        scheduleId: 3,
        title: "Correspondence such as e-mail, review of proposal materials at each site",
        timeStart: new Date('01/14/2021 06:00'),
        dueTime: new Date('01/16/2021 09:00'),
        typeSchedule: "Recruitment",
        typeRepeat: "normal",
        users: [
            {
                categoryName: 'Nguyễn Văn A',
                categoryId: 1,
            },
            {
                categoryName: 'Dương Văn B',
                categoryId: 2,
            },
        ]
    },
  ]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [ GroupWeekPersonBoardModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupWeekPersonBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe("emit data", ()=>{
    it("handleClickMonth", ()=>{
      const data = listDataSchedule;
      const spy = spyOn(component.monthlyOfSchedule, "emit");
      component.handleClickMonth(object);
        expect(spy).toHaveBeenCalledWith(object);
    });
    it("handleClickPhone", ()=>{
      const data = listDataSchedule;
      const spy = spyOn(component.phoneMemoRegistration, "emit");
      component.handleClickPhone(1);
        expect(spy).toHaveBeenCalledWith(1);
    });
    it("handleClickBtnAddTodo", ()=>{
      const data = listDataSchedule;
      const spy = spyOn(component.btnAddTodo, "emit");
      component.handleClickBtnAddTodo(1);
        expect(spy).toHaveBeenCalledWith(1);
    });
    it("handleClickUserDetail", ()=>{
      const data = listDataSchedule;
      const spy = spyOn(component.userDetail, "emit");
      data.forEach(element=>{
        component.handleClickUserDetail(element.scheduleId);
        expect(spy).toHaveBeenCalledWith(element.scheduleId);
      });
    });
    it("clickAddSchedule", ()=>{
      const data = listDataSchedule;
      const spy = spyOn(component.addSchedule, "emit");
      data.forEach(element=>{
        component.clickAddSchedule(element.scheduleId);
        expect(spy).toHaveBeenCalledWith(element.scheduleId);
      });
    });
    it("clickAddTodo", ()=>{
      const data = listDataSchedule;
      const spy = spyOn(component.addTodo, "emit");
      data.forEach(element=>{
        component.clickAddTodo(element.scheduleId);
        expect(spy).toHaveBeenCalledWith(element.scheduleId);
      });
    });
    it("getDetail", ()=>{
      const data = listDataSchedule;
      const spy = spyOn(component.scheduleId, "emit");
      data.forEach(element=>{
        component.getDetail(element.scheduleId);
        expect(spy).toHaveBeenCalledWith(element.scheduleId);
      });
    });
  });
});
