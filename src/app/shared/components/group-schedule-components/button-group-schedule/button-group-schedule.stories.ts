import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { IButtonGroup } from '../../../../store/models/button-group.i';
import { ButtonGroupScheduleComponent } from './button-group-schedule.component';
import { ButtonGroupScheduleModule } from './button-group-schedule.module';

const options: IButtonGroup<string>[] = [
  {
    icon: 'fast_forward',
    value: 'next week',
    displayValue: 'next week',
  },
  {
    icon: 'skip_next',
    value: 'next day',
    displayValue: 'next day',
  },
  {
    value: 'today',
    displayValue: 'today',
  },
  {
    icon: 'skip_previous',
    value: 'before day',
    displayValue: 'before day',
  },
  {
    icon: 'fast_rewind',
    value: 'last week',
    displayValue: 'last week',
  },
];
storiesOf('Group Schedule/ButtonGroupSchedule', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [ButtonGroupScheduleModule],
    })
  )
  .add('use', () => ({
    component: ButtonGroupScheduleComponent,
    props: {
      date: new Date(),
      buttonGroup: options,
      valueButtonGroup: action('data'),
    },
  }));
