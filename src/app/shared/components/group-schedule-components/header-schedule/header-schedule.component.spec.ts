import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LabelInterface } from '../../../../store/models/label.i';
import { LabelledValue } from '../../../../store/models/labelvalue.i';
import { ButtonGroupScheduleModule } from '../button-group-schedule/button-group-schedule.module';
import { LabelModule } from '../../label/label.module';
import { SelectModule } from '../../select/select.module';

import { HeaderScheduleComponent } from './header-schedule.component';

describe('HeaderScheduleComponent', () => {
  let component: HeaderScheduleComponent;
  let fixture: ComponentFixture<HeaderScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderScheduleComponent],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        LabelModule,
        SelectModule,
        ButtonGroupScheduleModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderScheduleComponent);
    component = fixture.componentInstance;
    component.data = fakeData;
    component.labelHeader = labels;
    component.placeholder = fakeLabel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
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
  var labels: LabelInterface = {
    content: 'Groups',
    size: 13,
    color: '',
    backgroundColor: '',
  };
  var fakeLabel = 'groups';
  describe('onGetValueSelect', () => {
    it('emit data', () => {
      const spy = jest.spyOn(component.getValueSelect, 'emit');
      const value: string = '1';
      component.onGetValueSelect(value);
      expect(spy).toHaveBeenCalledWith(value);
    });
  });
  describe('onValueButtonGroup', () => {
    it('emit data', () => {
      const spy = spyOn(component.valueButtonGroup, 'emit');
      const value: Date = new Date();
      component.onValueButtonGroup(value);
      expect(spy).toHaveBeenCalledWith(value);
    });
  });
});
