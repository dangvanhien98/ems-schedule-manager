import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScheduleContent } from '../../../../store/models/schedule_content.i';
import { UserInfo } from '../../../../store/models/group-week-user.i';
import { GroupDayPersonBoardComponent } from './group-day-person-board.component';
import { GroupDayPersonBoardModule } from './group-day-person-board.module';

describe('GroupDayPersonBoardComponent', () => {
  let component: GroupDayPersonBoardComponent;
  let fixture: ComponentFixture<GroupDayPersonBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [GroupDayPersonBoardModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDayPersonBoardComponent);
    component = fixture.componentInstance;
    component.userInfo = userInfo;
    component.monthly = monthly;
    component.listDataSchedule = listDataScheduleFake;
    component.startHour = startHour;
    component.endHour = endHour;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('emit data', () => {
    it('month', () => {
      const spy = spyOn(component.month, 'emit');
      component.onMonth(1);
      expect(spy).toHaveBeenCalledWith(1);
    });
    it('phone', () => {
      const spy = spyOn(component.phone, 'emit');
      component.onPhone(1);
      expect(spy).toHaveBeenCalledWith(1);
    });
    it('btnAddTodo', () => {
      const spy = spyOn(component.btnAddTodo, 'emit');
      component.onBtnAddTodo(1);
      expect(spy).toHaveBeenCalledWith(1);
    });
    it('userDetail', () => {
      const spy = spyOn(component.userDetail, 'emit');
      component.onUserDetail(1);
      expect(spy).toHaveBeenCalledWith(1);
    });
    it('scheduleId', () => {
      const spy = spyOn(component.scheduleId, 'emit');
      component.onScheduleId(1);
      expect(spy).toHaveBeenCalledWith(1);
    });
    it('addSchedule', () => {
      const spy = spyOn(component.addSchedule, 'emit');
      component.onAddSchedule(1);
      expect(spy).toHaveBeenCalledWith(1);
    });
    it('addTodo', () => {
      const spy = spyOn(component.addTodo, 'emit');
      component.onAddTodo(1);
      expect(spy).toHaveBeenCalledWith(1);
    });
  });
});
  const userInfo: UserInfo = {
    userId: 1,
    userName: 'uyennhi',
    fullName: 'Nguyễn Trương Uyên Nhi',
  };
  const monthly = '1/1/2020';
  const startHour = 7;
  const endHour = 20;
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
      timeStart: new Date('09/11/2020 14:15'),
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
      scheduleId: 5,
      title:
        'Correspon such as e-mail, review of proposal materials at each site',
      timeStart: new Date('09/11/2020 14:15'),
      dueTime: new Date('09/11/2020 16:15'),
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
      timeStart: new Date('09/11/2020 17:00'),
      dueTime: new Date('09/11/2020 19:00'),
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
      scheduleId: 7,
      title:
        'Correspon such as e-mail, review of proposal materials at each site',
      timeStart: new Date('09/11/2020 17:00'),
      dueTime: new Date('09/11/2020 20:00'),
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
      scheduleId: 8,
      title:
        'Correspon such as e-mail, review of proposal materials at each site',
      timeStart: new Date('09/11/2020 17:00'),
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
    },
  ];
