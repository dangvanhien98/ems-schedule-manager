import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IButtonGroup } from '../../../../store/models/button-group.i';
import { LabelInterface } from '../../../../store/models/label.i';
import { LabelledValue } from '../../../../store/models/labelvalue.i';

import { HeaderPageGroupDayComponent } from './header-page-group-day.component';
import { HeaderPageGroupDayModule } from './header-page-group-day.module';

describe('HeaderPageGroupDayComponent', () => {
  let component: HeaderPageGroupDayComponent;
  let fixture: ComponentFixture<HeaderPageGroupDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HeaderPageGroupDayModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPageGroupDayComponent);
    component = fixture.componentInstance;
    component.labelHeader = labels;
    component.dataSelect = fakeData;
    component.placeholder = fakeLabel;
    component.buttonGroup = options;
    component.dateCurrent = new Date();
    component.hourStart = 8;
    component.hourEnd = 19;
    fixture.detectChanges();
  });
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
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('emit data', () => {
    it('onValueButtonGroup', () => {
      const spy = jest.spyOn(component.valueButtonGroup, 'emit');
      const value: string = '1';
      component.onValueButtonGroup(value);
      expect(spy).toHaveBeenCalledWith(value);
    });
    it('onGetValueSelect', () => {
      const spy = jest.spyOn(component.getValueSelect, 'emit');
      const value: string = '1';
      component.onGetValueSelect(value);
      expect(spy).toHaveBeenCalledWith(value);
    });
  });
});
