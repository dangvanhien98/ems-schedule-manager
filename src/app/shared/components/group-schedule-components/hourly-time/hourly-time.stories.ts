import { storiesOf } from '@storybook/angular';
import { HourlyTimeComponent } from './hourly-time.component';
import { HourlyTimeModule } from './hourly-time.module';

storiesOf('Group Schedule/Group day', module).add('hourly time', () => ({
  component: HourlyTimeComponent,
  moduleMetadata: {
    imports: [
        HourlyTimeModule
    ],
  },
  props: {
    hourStart: 5,
    hourEnd: 24,
  }, 
}));
