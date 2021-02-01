import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialCustomModule } from '../../../material-custom/material-custom.module';
import { IButtonGroup } from '../../../../store/models/button-group.i';
import { ButtonGroupScheduleComponent } from './button-group-schedule.component';
import * as date from 'date-fns';
import { By } from '@angular/platform-browser';
describe('ButtonGroupScheduleComponent', () => {
  let component: ButtonGroupScheduleComponent;
  let fixture: ComponentFixture<ButtonGroupScheduleComponent>;
  let valueA: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonGroupScheduleComponent],
      imports: [CommonModule, MaterialCustomModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGroupScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.buttonGroup = options;
    component.date = new Date();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOninit', () => {
    it('emit new Date', () => {
      const spy = jest.spyOn(component.valueButtonGroup, 'emit');
      component.ngOnInit();
      expect(spy).toHaveBeenCalledWith(component.date);
    });
  });
  const options: IButtonGroup<string>[] = [
    {
      icon: 'fast_rewind',
      value: 'last week',
      displayValue: 'last week',
    },
    {
      icon: 'skip_previous',
      value: 'the day before',
      displayValue: 'the day before',
    },
    {
      icon: ' ',
      value: 'today',
      displayValue: 'today',
    },
    {
      icon: 'skip_next',
      value: 'next day',
      displayValue: 'next day',
    },
    {
      icon: 'fast_forward',
      value: 'next week',
      displayValue: 'next week',
    },
  ];
  describe('OnCLick', () => {
    it('click today, emit current day', () => {
      const spy = jest.spyOn(component.valueButtonGroup, 'emit');
      component.onClick('today');
      expect(spy).toHaveBeenCalledWith(component.date);
    });
    it('click next day, emit next day', () => {
      const spy = jest.spyOn(component.valueButtonGroup, 'emit');
      const spy0 = jest.spyOn(date, 'addDays');
      let value = (component.date = new Date());
      component.onClick('next day');
      expect(spy0).toHaveBeenCalledWith(value, 1);
      expect(spy).toHaveBeenCalledWith(component.date);
    });
    it('click the day before, emit the day before', () => {
      const spy = jest.spyOn(component.valueButtonGroup, 'emit');
      const spy0 = jest.spyOn(date, 'addDays');
      let value = (component.date = new Date());
      component.onClick('the day before');
      expect(spy0).toHaveBeenCalledWith(value, -1);
      expect(spy).toHaveBeenCalledWith(component.date);
    });

    it('click last week && this.date.getDay() != 0, emit last week', () => {
      const spy = jest.spyOn(component.valueButtonGroup, 'emit');
      const spy0 = jest.spyOn(date, 'addDays');
      component.onClick('last week');

      expect(spy0).toHaveBeenCalledWith(date.endOfWeek(new Date()), -6);
      expect(spy).toHaveBeenCalledWith(component.date);
    });
    it('click last week && this.date.getDay() == 0, emit last week', () => {
      const spy = jest.spyOn(component.valueButtonGroup, 'emit');
      const spy0 = jest.spyOn(date, 'addDays');
      let value = (component.date = new Date('2021-01-10T16:59:59.999Z'));
      component.onClick('last week');
      expect(spy0).toHaveBeenCalledWith(value, -7);
      expect(spy).toHaveBeenCalledWith(component.date);
    });
    it('click next week, emit last week', () => {
      const spy = jest.spyOn(component.valueButtonGroup, 'emit');
      const spy0 = jest.spyOn(date, 'addDays');
      component.onClick('next week');
      expect(spy0).toHaveBeenCalledWith(date.endOfWeek(new Date()), 1);
      expect(spy).toHaveBeenCalledWith(component.date);
    });
  });
  describe('Init', () => {
    it('should return button value, displayValue, icon in display', () => {
      // Act
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const values = fixture.debugElement.queryAll(By.css('#displayValue'));
        values.forEach((element, i) => {
          expect(element.nativeElement.textContent).toMatch(
            options[i].displayValue
          );
          expect(element.nativeElement.textContent).toMatch(options[i].icon);
          expect(element.nativeElement.textContent).toMatch(options[i].value);
        });
      });
    });
  });
});
