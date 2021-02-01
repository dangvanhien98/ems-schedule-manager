import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Icon, ScheduleContent } from '../../../../store/models/schedule_content.i';
import { ButtonsAddScheduleModule } from '../buttons-add-schedule/buttons-add-schedule.module';
import { NewContentScheduleModule } from '../new-content-schedule/new-content-schedule.module';

import { DailyBoardComponent } from './daily-board.component';

describe('DailyBoardComponent', () => {
  let component: DailyBoardComponent;
  let fixture: ComponentFixture<DailyBoardComponent>;

  const listDataScheduleFake: ScheduleContent[] = [
    {
      scheduleId: 1,
      title:
        'Correspon such as e-mail, review of proposal materials at each site',
      timeStart: new Date('09/11/2020 08:00'),
      dueTime: new Date('09/11/2020 09:00'),
      typeSchedule: 'Meeting',
      typeRepeat: 'everyday',
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
    },
    {
      scheduleId: 2,
      title:
        'Correspon such as e-mail, review of proposal materials at each site',
      timeStart: new Date('09/11/2020 10:00'),
      dueTime: new Date('09/11/2020 14:00'),
      typeSchedule: 'Meeting',
      typeRepeat: 'normal',
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
    },
    {
      scheduleId: 3,
      title:
        'Correspon such as e-mail, review of proposal materials at each site',
      timeStart: new Date('09/11/2020 13:00'),
      dueTime: new Date('09/11/2020 14:00'),
      typeSchedule: 'Meeting',
      typeRepeat: 'normal',
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
    },
    {
      scheduleId: 4,
      title:
        'Correspon such as e-mail, review of proposal materials at each site',
      timeStart: new Date('09/11/2020 13:00'),
      dueTime: new Date('09/11/2020 16:00'),
      typeSchedule: 'Meeting',
      typeRepeat: 'normal',
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
    },
    {
      scheduleId: 4,
      title:
        'Correspon such as e-mail, review of proposal materials at each site',
      timeStart: new Date('09/11/2020 13:15'),
      dueTime: new Date('09/11/2020 18:30'),
      typeSchedule: 'Meeting',
      typeRepeat: 'normal',
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
    },
    {
      scheduleId: 5,
      title:
        'Correspon such as e-mail, review of proposal materials at each site',
      timeStart: new Date('09/11/2020 15:00'),
      dueTime: new Date('09/11/2020 16:30'),
      typeSchedule: 'Meeting',
      typeRepeat: 'normal',
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
    },
    {
      scheduleId: 6,
      title:
        'Correspon such as e-mail, review of proposal materials at each site',
      timeStart: new Date('09/11/2020 16:45'),
      dueTime: new Date('09/11/2020 17:15'),
      typeSchedule: 'Meeting',
      typeRepeat: 'normal',
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
    },
  ];

  const listDataSchedule: ScheduleContent[] = [
    {
      scheduleId: 1,
      title:
        'Correspon such as e-mail, review of proposal materials at each site',
      timeStart: new Date('09/11/2020 08:00'),
      dueTime: new Date('09/11/2020 09:00'),
      typeSchedule: 'Meeting',
      typeRepeat: 'everyday',
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
    },
    {
      scheduleId: 2,
      title:
        'Correspon such as e-mail, review of proposal materials at each site',
      timeStart: new Date('09/11/2020 10:00'),
      dueTime: new Date('09/11/2020 14:00'),
      typeSchedule: 'Meeting',
      typeRepeat: 'normal',
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
    },
    {
      scheduleId: 3,
      title:
        'Correspon such as e-mail, review of proposal materials at each site',
      timeStart: new Date('09/11/2020 13:00'),
      dueTime: new Date('09/11/2020 14:00'),
      typeSchedule: 'Meeting',
      typeRepeat: 'normal',
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
    },
    {
      scheduleId: 4,
      title:
        'Correspon such as e-mail, review of proposal materials at each site',
      timeStart: new Date('09/11/2020 13:00'),
      dueTime: new Date('09/11/2020 16:00'),
      typeSchedule: 'Meeting',
      typeRepeat: 'normal',
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
    },
    {
      scheduleId: 4,
      title:
        'Correspon such as e-mail, review of proposal materials at each site',
      timeStart: new Date('09/11/2020 14:15'),
      dueTime: new Date('09/11/2020 18:30'),
      typeSchedule: 'Meeting',
      typeRepeat: 'normal',
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
    },
    {
      scheduleId: 5,
      title:
        'Correspon such as e-mail, review of proposal materials at each site',
      timeStart: new Date('09/11/2020 15:00'),
      dueTime: new Date('09/11/2020 16:30'),
      typeSchedule: 'Meeting',
      typeRepeat: 'normal',
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
    },
    {
      scheduleId: 6,
      title:
        'Correspon such as e-mail, review of proposal materials at each site',
      timeStart: new Date('09/11/2020 16:45'),
      dueTime: new Date('09/11/2020 17:15'),
      typeSchedule: 'Meeting',
      typeRepeat: 'normal',
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
    },
  ];

  let newSchedule: ScheduleContent = {
    scheduleId: 3,
    title:
      'Correspon such as e-mail, review of proposal materials at each site',
    timeStart: new Date('09/11/2020 17:15'),
    dueTime: new Date('09/11/2020 18:00'),
    typeSchedule: 'Meeting',
    typeRepeat: 'normal',
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
  };

  const icon: Icon = {
    iconStart: 'warning',
    iconEnd1: 'repeat',
    iconEnd2: 'folder_shared',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DailyBoardComponent],
      imports: [
        FlexLayoutModule,
        NewContentScheduleModule,
        ButtonsAddScheduleModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyBoardComponent);
    component = fixture.componentInstance;
    component.listDataSchedule = listDataScheduleFake;
    component.userId = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("getSchedule", () => {
    it("should emit scheduleId", () => {
      const spy = spyOn(component.scheduleId, 'emit');
      const expected = 1;
      component.getScheduleId(expected);
      expect(spy).toHaveBeenCalledWith(expected);
    })
  })

  describe("clickAddTodo", () => {
    it("should emit userId", () => {
      const spy = spyOn(component.addTodo, 'emit');
      const expected = 1;
      component.clickAddTodo(expected);
      expect(spy).toHaveBeenCalledWith(expected);
    })
  })

  describe("clickAddSchedule", () => {
    it("should emit userId", () => {
      const spy = spyOn(component.addSchedule, 'emit');
      const expected = 1;
      component.clickAddSchedule(expected);
      expect(spy).toHaveBeenCalledWith(expected);
    })
  })

  describe("convertDataSchedule", () => {
    it("when last row have than 1 schedule", () => {
      component.listDataSchedule = listDataSchedule;
      const expected = 5;
      component.ngOnInit();
      expect(component.listDataDailySchedule[component.listDataDailySchedule.length - 1].length).toEqual(expected);
    })
  })

  describe("addFreeTime", () => {
    it("list should add one schedule", () => {
      const expected = 8;
      component.addFreeTime(listDataSchedule, newSchedule);
      expect(listDataSchedule.length).toEqual(expected);
    })
  })

  describe("addLastFreeTime", () => {
    it("should add zero schedule", () => {
      component.endHour = 18;
      const expected = listDataSchedule.length;
      component.addLastFreeTime(listDataSchedule);
      expect(listDataSchedule.length).toEqual(expected);
    })
  })

  describe("onInit", () => {
    it("set flex percent", () => {
      component.listDataSchedule = listDataScheduleFake;
      const expected = component.getPercent(listDataScheduleFake[0]).toString() + '%';
      fixture.detectChanges();
      const div = fixture.debugElement.nativeElement.querySelectorAll('div');
      expect(div[1].style['max-width']).toEqual(expected);
    })
  })
});
