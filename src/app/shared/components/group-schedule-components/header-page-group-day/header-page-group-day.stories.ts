import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { IButtonGroup } from '../../../../store/models/button-group.i';
import { LabelInterface } from '../../../../store/models/label.i';
import { LabelledValue } from '../../../../store/models/labelvalue.i';
import { HeaderPageGroupDayComponent } from './header-page-group-day.component';
import { HeaderPageGroupDayModule } from './header-page-group-day.module';

storiesOf('Group Schedule/Header page group day', module).add('Header', () => ({
  component: HeaderPageGroupDayComponent,
  moduleMetadata: {
    imports: [HeaderPageGroupDayModule],
  },
  props: {
    hourStart: 8,
    hourEnd: 19,
    labelHeader: labels,
    dataSelect: fakeData,
    placeholder: fakeLabel,
    dateCurrent: new Date(),
    buttonGroup: options,
    valueButtonGroup: action("valueButtonGroup"),
    getValueSelect: action("getValueSelect")
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
