import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { WeekScheduleComponent } from './week-schedule.component';
import { WeekScheduleModule } from './week-schedule.module';

storiesOf('Group Schedule/week schedule', module).add('week', () => ({
  component: WeekScheduleComponent,
  moduleMetadata: {
    imports: [WeekScheduleModule],
  },
  props: {
    isAddTodo: true,
    isStories: true,
    dayFirstInWeek: new Date(),
    listDataSchedule: [
      {
        scheduleId: 1,
        title: "Correspondence such as e-mail, review of proposal materials at each site",
        timeStart: new Date('01/28/2021 08:00'),
        dueTime: new Date('01/29/2021 09:00'),
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
        timeStart: new Date('01/18/2021 08:00'),
        dueTime: new Date('01/19/2021 11:00'),
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
        timeStart: new Date('01/19/2021 06:00'),
        dueTime: new Date('01/20/2021 09:00'),
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
        ]
      },
      {
        scheduleId: 3,
        title: "Correspondence such as e-mail, review of proposal material",
        timeStart: new Date('01/14/2021 08:00'),
        dueTime: new Date('01/14/2021 09:00'),
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
        ]
      },
      {
        scheduleId: 4,
        title: "Correspondence such as e-mail, review of proposal materials at each site",
        timeStart: new Date('01/16/2021 08:00'),
        dueTime: new Date('01/16/2021 09:00'),
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
        ]
      },
      {
        scheduleId: 4,
        title: "Correspondence such as e-mail, review of proposal materials at each site",
        timeStart: new Date('01/16/2021 09:00'),
        dueTime: new Date('01/16/2021 10:00'),
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
        ]
      },
    ],
    icon: {
      iconStart: "warning",
      iconEnd1: "repeat",
      iconEnd2: "folder_shared",
    },
    userId: 1,
    scheduleId: action('scheduleId'),
    addTodo: action('btnClickAddTodo'),
    addSchedule: action('btnClickAddSchedule'),
  },
}));
