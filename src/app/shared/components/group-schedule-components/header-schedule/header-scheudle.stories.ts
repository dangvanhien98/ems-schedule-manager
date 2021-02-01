import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { HeaderScheduleComponent } from './header-schedule.component';
import { LabelInterface } from '../../../../store/models/label.i';
import { HeaderScheduleModule } from './header-schedule.modules';
import { LabelledValue } from '../../../../store/models/labelvalue.i';
import { IButtonGroup } from '../../../../store/models/button-group.i';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

storiesOf('Group Schedule/Header Schedule', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [HeaderScheduleModule, BrowserAnimationsModule],
    })
  )
  .add('header schedule', () => ({
    component: HeaderScheduleComponent,
    props: {
      labelHeader: labels,
      data: fakeData,
      placeholder: fakeLabel,
      date: new Date(),
      buttonGroup: options,
      getValueSelect: action('getValueSelect'),
      valueButtonGroup: action('data'),
    },
  }));
var labels: LabelInterface = {
  content: 'Groups',
  size: 13,
  color: '',
  backgroundColor: '',
};
var fakeData: LabelledValue<string>[] = [
  {
    label: 'EMS-1',
    value: '1',
  },
  {
    label: 'EMS-2',
    value: '2',
  },
  {
    label: 'EMS-3',
    value: '3',
  },
  {
    label: 'EMS-5',
    value: '4',
  },
  {
    label: 'EMS-5',
    value: '5',
  },
];

var fakeLabel = 'groups';

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
