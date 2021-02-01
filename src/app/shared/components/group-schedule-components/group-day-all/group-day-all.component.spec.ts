import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupDayAllComponent } from './group-day-all.component';
import { LabelInterface } from '../../../../store/models/label.i';
import { LabelledValue } from '../../../../store/models/labelvalue.i';
import { ListScheduleContent } from '../../../../store/models/list-schedule-content';
import { GroupDayAllModule } from './group-day-all.module';

describe('GroupDayAllComponent', () => {
  let component: GroupDayAllComponent;
  let fixture: ComponentFixture<GroupDayAllComponent>;
  var labels: LabelInterface = {
    content: 'Groups',
    size: 13,
    color: '',
    backgroundColor: '',
  };
  var fakeData: LabelledValue<string>[] = [
    {
      label: 'EMS-1',
      value: '1',
    },
    {
      label: 'EMS-2',
      value: '2',
    },
    {
      label: 'EMS-3',
      value: '3',
    },
    {
      label: 'EMS-5',
      value: '4',
    },
    {
      label: 'EMS-5',
      value: '5',
    },
  ];
  const listDataScheduleFake: ListScheduleContent[] = [
    {
      detailSchedule: [
        {
          scheduleId: 1,
          title:
            'Correspon such as e-mail, review of proposal materials at each site',
          timeStart: new Date('01/25/2021 08:00'),
          dueTime: new Date('01/25/2021 09:00'),
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
          timeStart: new Date('01/25/2021 10:00'),
          dueTime: new Date('01/25/2021 14:00'),
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
          timeStart: new Date('01/25/2021 13:00'),
          dueTime: new Date('01/25/2021 14:00'),
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
      ],
      detailUser: {
        userId: 1,
        userName: 'lbmui',
        fullName: 'Lê Bá Mùi',
      }
    },
    {
      detailSchedule: [
        {
          scheduleId: 1,
          title:
            'Correspon such as e-mail, review of proposal materials at each site',
          timeStart: new Date('01/25/2021 07:00'),
          dueTime: new Date('01/25/2021 11:00'),
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
          timeStart: new Date('01/25/2021 10:00'),
          dueTime: new Date('01/25/2021 17:00'),
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
          timeStart: new Date('01/25/2021 12:00'),
          dueTime: new Date('01/25/2021 14:00'),
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
      ],
      detailUser: {
        userId: 2,
        userName: 'ntu_nhi',
        fullName: 'Nguyễn Trương Uyên Nhi',
      }
    },
    {
      detailSchedule: [
        {
          scheduleId: 1,
          title:
            'Correspon such as e-mail, review of proposal materials at each site',
          timeStart: new Date('01/25/2021 08:00'),
          dueTime: new Date('01/25/2021 09:00'),
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
          timeStart: new Date('01/25/2021 10:00'),
          dueTime: new Date('01/25/2021 14:00'),
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
          timeStart: new Date('01/25/2021 13:00'),
          dueTime: new Date('01/25/2021 14:00'),
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
      ],
      detailUser: {
        userId: 3,
        userName: 'ntk_thoa',
        fullName: 'Nguyễn Thị Kim Thoa',
      }
    },
  ];
  const listDataScheduleUndefined: ListScheduleContent[] = [
    {
      detailSchedule: [
        {
          scheduleId: 1,
          title:
            'Correspon such as e-mail, review of proposal materials at each site',
          timeStart: undefined,
          dueTime: undefined,
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
          timeStart: new Date('01/25/2021 10:00'),
          dueTime: new Date('01/25/2021 14:00'),
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
          timeStart: new Date('01/25/2021 13:00'),
          dueTime: new Date('01/25/2021 14:00'),
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
      ],
      detailUser: {
        userId: 1,
        userName: 'lbmui',
        fullName: 'Lê Bá Mùi',
      }
    },
  ]


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        GroupDayAllModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDayAllComponent);
    component = fixture.componentInstance;
    component.labelHeader = labels;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('emit data header-page-group-week', () => {
    it('checkScroll()', () => {
      global.pageYOffset = 200;
      const expected = true;
      component.checkScroll();
      expect(component.isSticky).toBe(expected);
    });
    it('checkScroll()', () => {
      global.pageYOffset = 40;
      const expected = false;
      component.checkScroll();
      expect(component.isSticky).toBe(expected);
    });
  });

  describe("emit data", () => {
    it("onValueButtonGroup", () => {
      component.dateCurrent = new Date();
      const expected = new Date();
      const spy = spyOn(component.valueButtonGroup, "emit");
      component.onValueButtonGroup(expected);
      expect(spy).toHaveBeenCalledWith(expected);
    });
    it("onGetValueSelect", () => {
      component.dataSelect = fakeData;
      const expected = "1";
      const spy = spyOn(component.getValueSelect, "emit");
      component.onGetValueSelect(expected);
      expect(spy).toHaveBeenCalledWith(expected);
    });
    it("onMonth", () => {
      const expected = new Date();
      const spy = spyOn(component.month, "emit");
      component.onMonth(expected);
      expect(spy).toHaveBeenCalledWith(expected);
    });
    it("onPhone", () => {
      const expected = "123456789";
      const spy = spyOn(component.phone, "emit");
      component.onPhone(expected);
      expect(spy).toHaveBeenCalledWith(expected);
    });
    it("onBtnAddTodo", () => {
      const expected = "1";
      const spy = spyOn(component.btnAddTodo, "emit");
      component.onBtnAddTodo(expected);
      expect(spy).toHaveBeenCalledWith(expected);
    });
    it("onUserDetail", () => {
      const expected = "1";
      const spy = spyOn(component.userDetail, "emit");
      component.onUserDetail(expected);
      expect(spy).toHaveBeenCalledWith(expected);
    });
    it("onScheduleId", () => {
      const expected = "1";
      const spy = spyOn(component.scheduleId, "emit");
      component.onScheduleId(expected);
      expect(spy).toHaveBeenCalledWith(expected);
    });
    it("onAddSchedule", () => {
      const expected = "1";
      const spy = spyOn(component.addSchedule, "emit");
      component.onAddSchedule(expected);
      expect(spy).toHaveBeenCalledWith(expected);
    });
    it("onAddTodo", () => {
      const expected = "1";
      const spy = spyOn(component.addTodo, "emit");
      component.onAddTodo(expected);
      expect(spy).toHaveBeenCalledWith(expected);
    });
  });
  describe("Check get hour", () => {
    it("getStartHour", () => {
      component.listDataSchedule = listDataScheduleFake;
      expect(component.getStartHour()).toEqual(7);
    });
    it("type date is undefine", () => {
      component.listDataSchedule = listDataScheduleUndefined;
      expect(component.getEndHour()).toEqual(14);
    });
    it("getEndHour", () => {
      component.listDataSchedule = listDataScheduleFake;
      expect(component.getEndHour()).toEqual(17);
    });
  });

});
