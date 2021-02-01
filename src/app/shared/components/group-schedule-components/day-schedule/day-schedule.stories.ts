import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { DayScheduleComponent } from './day-schedule.component';
import { DayScheduleModule } from './day-schedule.module';

storiesOf('Group Schedule/Day schedule', module)
  .add('Day schedule', () => ({
    component: DayScheduleComponent,
    props: {
      isAddTodo: true,
      isStories: true,
      day: new Date('2021/01/15'),
      listDataSchedule: [
        {
          scheduleId: 1,
          title: "Correspondence such as e-mail, review of proposal materials at each siting",
          timeStart: new Date('01/15/2021 07:00'),
          dueTime: new Date('01/15/2021 20:40'),
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
          scheduleId: 2,
          title: "Correspondence such as e-mail, review of proposal materials at each site",
          timeStart: new Date('01/15/2021 15:00'),
          dueTime: new Date('01/15/2021 16:00'),
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
          timeStart: new Date('01/15/2021 20:00'),
          dueTime: new Date('01/15/2021 20:20'),
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
          title: "Correspondence such as e-mail, review of proposal material",
          timeStart: new Date('01/15/2021 20:00'),
          dueTime: new Date('01/15/2021 20:17'),
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
      addTodo: action('AddTodo'),
      addSchedule: action('AddSchedule'),
    },
    moduleMetadata: {
      imports: [DayScheduleModule],
    },
  }));
