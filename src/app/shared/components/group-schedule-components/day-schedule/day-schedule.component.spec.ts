import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScheduleContent } from '../../../../store/models/schedule_content.i';
import { Icon } from '../../../../store/models/schedule_content.i'
import { DayScheduleComponent } from './day-schedule.component';
import { DayScheduleModule } from './day-schedule.module';

describe('DayScheduleComponent', () => {
  let component: DayScheduleComponent;
  let fixture: ComponentFixture<DayScheduleComponent>;
  const list: ScheduleContent[] = [
    {
      scheduleId: 1,
      title: "Correspondence such as e-mail, review of proposal materials at each site",
      timeStart: new Date('01/18/2021 08:00'),
      dueTime: new Date('01/18/2021 09:00'),
      typeSchedule: "Visting",
      typeRepeat: "everyday",
      isWarning: false,
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
      timeStart: new Date('01/18/2021 08:00'),
      dueTime: new Date('01/19/2021 11:00'),
      typeSchedule: "Recruitment",
      typeRepeat: "normal",
      isWarning: false,
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
      timeStart: new Date('01/19/2021 06:00'),
      dueTime: new Date('01/20/2021 09:00'),
      typeSchedule: "Meeting",
      typeRepeat: "normal",
      isWarning: false,
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
  const listDataSchedule: ScheduleContent[] = [
    {
      scheduleId: 1,
      title: "Correspondence such as e-mail, review of proposal materials at each site",
      timeStart: new Date(),
      dueTime: new Date(),
      typeSchedule: "Meeting",
      typeRepeat: "everyday",
      isWarning: false,
    },
    {
      scheduleId: 2,
      title: "Correspondence such as e-mail, review of proposal materials at each site",
      timeStart: new Date(),
      dueTime: new Date(),
      typeSchedule: "Meeting",
      typeRepeat: "normal",
      isWarning: false,
    }
  ];
  const listData: ScheduleContent[] = [
    {
      scheduleId: 1,
      title: "Correspondence such as e-mail, review of proposal materials at each site",
      timeStart: new Date('09/11/2020 08:00'),
      dueTime: new Date('09/11/2020 09:00'),
      typeSchedule: "Meeting",
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
      ],
      isWarning: false,
    },
    {
      scheduleId: 2,
      title: "Correspondence such as e-mail, review of proposal materials at each site",
      timeStart: new Date('09/11/2020 13:00'),
      dueTime: new Date('09/11/2020 15:00'),
      typeSchedule: "Meeting",
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
      ],
      isWarning: false,
    },
  ];
  const icon: Icon = {
    iconStart: "warning",
    iconEnd1: "repeat",
    iconEnd2: "folder_shared",
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        DayScheduleModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe("ngOnInit", () => {
    it("Warning is true", () => {
      component.listDataSchedule = list;
      component.ngOnInit();
      expect(component.listDataInDay[0].isWarning).toEqual(true);
    })
    it("Warning is false", () => {
      component.listDataSchedule = listDataSchedule;
      component.ngOnInit();
      expect(component.listDataSchedule[1].isWarning).toEqual(false);
    });
    it("timeStart different timeDay", ()=>{
      component.listDataSchedule = listData;
      component.ngOnInit();
      expect(component.listDataSchedule[1].isWarning).toEqual(false);
    })
  });
  describe("sortArr", () => {
    it("return array sorted", () => {
      component.listDataSchedule = listDataSchedule;
      component.sortArr(listDataSchedule);
      expect(component.listDataSchedule[0].scheduleId).toEqual(1);
      expect(component.listDataSchedule[1].scheduleId).toEqual(2);
    })
  })
  describe("emit data", () => {
    it("getDetail", () => {
      component.listDataSchedule = listDataSchedule;
      const spy = spyOn(component.scheduleId, "emit");
      listDataSchedule.forEach(element => {
        component.getDetail(element.scheduleId);
        expect(spy).toHaveBeenCalledWith(element.scheduleId);
      });
    });
    it("clickAddSchedule", () => {
      component.listDataSchedule = listDataSchedule;
      const spy = spyOn(component.addSchedule, "emit");
      listDataSchedule.forEach(element => {
        component.clickAddSchedule(element.scheduleId);
        expect(spy).toHaveBeenCalledWith(element.scheduleId);
      });
    });
    it("clickAddTodo", () => {
      component.listDataSchedule = listDataSchedule;
      const spy = spyOn(component.addTodo, "emit");
      listDataSchedule.forEach(element => {
        component.clickAddTodo(element.scheduleId);
        expect(spy).toHaveBeenCalledWith(element.scheduleId);
      });
    });
  });
});
