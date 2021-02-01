import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { HandleWeekComponent } from './handle-week.component';
import { HandleWeekModule } from './handle-week.module';

storiesOf('Group Schedule/Header week group', module).add('Handel week', () => ({
  component: HandleWeekComponent,
  moduleMetadata: {
    imports: [HandleWeekModule],
  },
  props: {
      dateInput : new Date(),
      dateOutput: action("dateOutput"),
  },
}));
