import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { GroupWeekPersonBoardComponent } from './group-week-person-board.component';
import { GroupWeekPersonBoardModule } from './group-week-person-board.module';

storiesOf('Group Schedule/Group week schedule', module)
  .add('Group week person board', () => ({
    component: GroupWeekPersonBoardComponent,
    props: {
      isAddTodo: true,
      isStories: true,
      userInfo: {
        userId: 1,
        userName: 'uyennhi',
        fullName: 'Nguyễn Trương Uyên Nhi 1',
      },
      dayFirstInWeek: new Date("01/18/2021"),
      monthly: "1/1/2020",
      listDataSchedule: [
        {
          scheduleId: 1,
          title: "Correspondence such as e-mail, review of proposal materials at each site nh",
          timeStart: new Date('02/21/2021 08:00'),
          dueTime: new Date('02/22/2021 09:00'),
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
          timeStart: new Date('01/20/2021 08:00'),
          dueTime: new Date('01/20/2021 11:00'),
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
          timeStart: new Date('01/25/2021 08:00'),
          dueTime: new Date('01/25/2021 09:00'),
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
          title: "Correspondence such as e-mail, review of proposal materials at each siteaa",
          timeStart: new Date('01/22/2021 08:00'),
          dueTime: new Date('01/22/2021 09:00'),
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
      addTodo: action('AddTodo'),
      addSchedule: action('AddSchedule'),
      monthlyOfSchedule: action('btnClickMonth'),
      phoneMemoRegistration: action('btnClickEmtPhone'),
      btnAddTodo: action('btnClickEmtAddTodo'),
      userDetail: action('btnClickEmtUserDetail'),
    },
    moduleMetadata: {
      imports: [GroupWeekPersonBoardModule, BrowserAnimationsModule],
    },
  }));
