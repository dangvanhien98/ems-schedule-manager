import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { DayInWeekComponent } from './day-in-week.component';
import { DayInWeekModule } from './day-in-week.module';

storiesOf('Group Schedule/Header week group', module)
  .add('Day in week', () => ({
    component: DayInWeekComponent,
    moduleMetadata: {
        imports: [DayInWeekModule]
    },
    props: {
        date : new Date(),
        dailySchedule: action("daily schedule"),
    },
  }));
