import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { IButtonGroup } from '../../../../store/models/button-group.i';
import { LabelInterface } from '../../../../store/models/label.i';
import { LabelledValue } from '../../../../store/models/labelvalue.i';
import { ListScheduleContent } from '../../../../store/models/list-schedule-content';
import { GroupDayAllComponent } from './group-day-all.component';
import { GroupDayAllModule } from './group-day-all.module';

storiesOf('Group Schedule/Group day all', module)
  .add('Group day all', () => ({
    component: GroupDayAllComponent,
    props: {
      labelHeader: labels,
      dataSelect: fakeData,
      placeholder: fakeLabel,
      dateCurrent: new Date(),
      buttonGroup: options,
      monthly: '01/22/2021',
      //group-day-peron-board
      listDataSchedule: listDataScheduleFake,
      scheduleId: action('scheduleId: '),
      addSchedule: action('addSchedule: '),
      //group-day-peron-board
      addTodo: action('addTodo: '),
      month: action('btnClickMonth'),
      phone: action('btnClickEmtPhone'),
      btnAddTodo: action('btnClickEmtAddTodo'),
      userDetail: action('btnClickEmtUserDetail'),
      valueButtonGroup: action("valueButtonGroup"),
      getValueSelect: action("getValueSelect"),
      //pagination
      onPageChange: action('page changes'),
    },
    moduleMetadata: {
      imports: [GroupDayAllModule],
    },
  }));

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

var fakeLabel = 'groups';

const options: IButtonGroup<string>[] = [
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
      {
        scheduleId: 4,
        title:
          'Correspon such as e-mail, review of proposal materials at each site',
        timeStart: new Date('01/25/2021 14:15'),
        dueTime: new Date('01/25/2021 16:30'),
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
        timeStart: new Date('01/25/2021 14:15'),
        dueTime: new Date('01/25/2021 16:15'),
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
        timeStart: new Date('01/25/2021 17:00'),
        dueTime: new Date('01/25/2021 20:50'),
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
        timeStart: new Date('01/25/2021 17:00'),
        dueTime: new Date('01/25/2021 18:00'),
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
        ]
      }
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
      {
        scheduleId: 4,
        title:
          'Correspon such as e-mail, review of proposal materials at each site',
        timeStart: new Date('01/25/2021 12:15'),
        dueTime: new Date('01/25/2021 16:30'),
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
        timeStart: new Date('01/25/2021 14:15'),
        dueTime: new Date('01/25/2021 16:15'),
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
        timeStart: new Date('01/25/2021 17:00'),
        dueTime: new Date('01/25/2021 19:00'),
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
        timeStart: new Date('01/25/2021 17:00'),
        dueTime: new Date('01/25/2021 20:00'),
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
        timeStart: new Date('01/25/2021 17:00'),
        dueTime: new Date('01/25/2021 18:00'),
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
        ]
      }
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
      {
        scheduleId: 4,
        title:
          'Correspon such as e-mail, review of proposal materials at each site',
        timeStart: new Date('01/25/2021 14:15'),
        dueTime: new Date('01/25/2021 16:30'),
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
        timeStart: new Date('01/25/2021 14:15'),
        dueTime: new Date('01/25/2021 16:15'),
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
        timeStart: new Date('01/25/2021 17:00'),
        dueTime: new Date('01/25/2021 21:00'),
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
        timeStart: new Date('01/25/2021 17:00'),
        dueTime: new Date('01/25/2021 20:00'),
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
        timeStart: new Date('01/25/2021 17:00'),
        dueTime: new Date('01/25/2021 18:00'),
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
        ]
      }
    ],
    detailUser: {
      userId: 3,
      userName: 'ntk_thoa',
      fullName: 'Nguyễn Thị Kim Thoa',
    }
  },
];

