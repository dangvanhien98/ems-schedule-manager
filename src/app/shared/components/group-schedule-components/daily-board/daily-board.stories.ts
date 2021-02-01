import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { ScheduleContent } from '../../../../store/models/schedule_content.i';
import { DailyBoardComponent } from './daily-board.component';
import { DailyBoardModule } from './daily-board.module';

storiesOf('Group Schedule/ Daily schedule', module)
  .addDecorator(withKnobs)
  .add('Daily board', () => ({
    component: DailyBoardComponent,
    moduleMetadata: {
      imports: [DailyBoardModule],
    },
    props: {
      userId: 1,
      startHour: 7,
      endHour: 20,
      listDataSchedule: listDataScheduleFake,
      scheduleId: action('scheduleId: '),
      addSchedule: action("addSchedule: "),
      addTodo: action("addTodo: ")
    },
  }));

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
