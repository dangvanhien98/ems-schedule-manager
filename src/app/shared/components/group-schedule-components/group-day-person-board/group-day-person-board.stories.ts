import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { ScheduleContent } from '../../../../store/models/schedule_content.i';
import { GroupDayPersonBoardComponent } from './group-day-person-board.component';
import { GroupDayPersonBoardModule } from './group-day-person-board.module';

storiesOf('Group Schedule/Group day schedule', module).add(
  'Group day person board',
  () => ({
    component: GroupDayPersonBoardComponent,
    moduleMetadata: {
      imports: [GroupDayPersonBoardModule],
    },
    props: {
      userInfo: {
        userId: 1,
        userName: 'uyennhi',
        fullName: 'Nguyễn Trương Uyên Nhi',
      },
      monthly: '1/1/2020',
      startHour: 7,
      endHour: 20,
      listDataSchedule: listDataScheduleFake,
      scheduleId: action('scheduleId: '),
      addSchedule: action('addSchedule: '),
      addTodo: action('addTodo: '),
      month: action('btnClickMonth'),
      phone: action('btnClickEmtPhone'),
      btnAddTodo: action('btnClickEmtAddTodo'),
      userDetail: action('btnClickEmtUserDetail'),
    },
  })
);
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
