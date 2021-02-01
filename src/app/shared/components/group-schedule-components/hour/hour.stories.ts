import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { HourComponent } from './hour.component';
import { HourModule } from './hour.module';


storiesOf('Group Schedule/Group day', module).add('hour component', () => ({
  component: HourComponent,
  moduleMetadata: {
    imports: [HourModule],
  },
  props: {
    hourNumber: 22,

  },
}));
