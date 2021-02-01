import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { NewContentScheduleComponent } from './new-content-schedule.component';
import { NewContentScheduleModule } from './new-content-schedule.module';

storiesOf('Group Schedule/New content schedule', module)
  .add('New content', () => ({
    component: NewContentScheduleComponent,
    props: {
      dataSchedule: {
        scheduleId: 1,
        title: "Correspondence such as e-mail, review of proposal materials at each site",
        timeStart: new Date('09/11/2020 08:00'),
        dueTime: new Date('09/11/2020 11:00'),
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
        isWarning: true,
      },
      icon: {
        iconStart: "warning",
        iconEnd1: "repeat",
        iconEnd2: "folder_shared",
      },
      isWarning: true,
      scheduleId: action('scheduleId'),
    },
    moduleMetadata: {
      imports: [NewContentScheduleModule],
    },
  }));
