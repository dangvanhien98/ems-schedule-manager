import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { HeaderPageGroupWeekModule } from './header-page-group-week.module';
import { HeaderPageGroupWeekComponent } from './header-page-group-week.component';
import { LabelInterface } from '../../../../store/models/label.i';
import { LabelledValue } from '../../../../store/models/labelvalue.i';
import { IButtonGroup } from '../../../../store/models/button-group.i';
import { action } from '@storybook/addon-actions';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

storiesOf('Group Schedule/Header Page group week', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [HeaderPageGroupWeekModule, BrowserAnimationsModule],
    })
  )
  .add('header page', () => ({
    component: HeaderPageGroupWeekComponent,
    props: {
      labelHeader: labels,
      dataSelect: fakeData,
      placeholder: fakeLabel,
      dateCurrent: new Date(),
      buttonGroup: options,
      getValueSelect: action('getValueSelect'),
      valueButtonGroup: action('data'),
      dailySchedule: action('dailySchedule'),
      firstDayOfWeek: action('firstDayOfWeek'),
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
