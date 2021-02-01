
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UserInfoGroupWeekComponent } from './user-info-group-week.component';
import { UserInfoGroupWeekModule } from './user-info-group-week.module';

describe('UserInfoGroupWeekComponent', () => {
  let component: UserInfoGroupWeekComponent;
  let fixture: ComponentFixture<UserInfoGroupWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        UserInfoGroupWeekModule
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoGroupWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should emit data ', () => {
      // arrange
      component.userInfo = {
        userId: 1,
        userName: 'uyennhi',
        fullName: 'Nguyễn Trương Uyên Nhi 1',
      };
      component.sign = "down";
      fixture.detectChanges();
      let fullName = fixture.debugElement.query(By.css('.person-information'));
      let sign = fixture.debugElement.query(By.css('.confirmation'));
      // act
      // assert
      expect(component.userInfo.fullName).toEqual(
        fullName.nativeElement.textContent.slice(10).trim()
      );
      expect(component.sign).toEqual(
        sign.nativeElement.textContent.slice(49).trim()
      );
    });
  });

  describe('handleClickPhone()', () => {
    it('should emit when ClickPhone', () => {
      //arrange
      const spy = spyOn(component.phone, 'emit');
      // act
      component.handleClickPhone();
      // assert
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('handleClickBtnAddTodo()', () => {
    it('should emit when AddTodo', () => {
      //arrange
      const spy = spyOn(component.btnAddTodo, 'emit');
      // act
      component.handleClickBtnAddTodo();
      // assert
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('handleClickMonth()', () => {
    it('should emit when AddTodo', () => {
      //arrange
      const expectedMonth = new Date("1/1/2020");
      const expectedUserId = 12;
      component.monthly = new Date("1/1/2020");
      component.userInfo = {
        userId: 12,
        userName: '',
        fullName: '',
      };
      fixture.detectChanges();
      const spyMonth = spyOn(component.month, 'emit');
      // act
      component.handleClickMonth();
      // assert
      expect(spyMonth).toHaveBeenCalledWith({monthly: expectedMonth, userId: component.userInfo.userId});
    });
  });

  describe('handleClickUserDetail(data: number)', () => {
    it('should emit when AddTodo', () => {
      //arrange
      const expected = 2;
      component.userInfo = {
        userId: 2,
        userName: '',
        fullName: '',
      };
      fixture.detectChanges();
      const spy = spyOn(component.userDetail, 'emit');
      // act
      component.handleClickUserDetail(expected);
      // assert
      expect(spy).toHaveBeenCalledWith(expected);
    });
  });

  describe('clickConfirmation() when showUpConfirmation is true', () => {
    it('should emit when AddTodo', () => {
      //arrange
      component.showUpConfirmation = true;
      component.sign = "down"
      fixture.detectChanges();
      // act
      component.clickConfirmation();
      // assert
      expect(component.showUpConfirmation).toBe(false);
      expect(component.sign).toBe("up");
    });
  });

  describe('clickConfirmation() when showUpConfirmation is false', () => {
    it('should emit when AddTodo', () => {
      //arrange
      component.showUpConfirmation = false;
      component.sign = "up"
      fixture.detectChanges();
      // act
      component.clickConfirmation();
      // assert
      expect(component.showUpConfirmation).toBe(true);
      expect(component.sign).toBe("down");
    });
  });

  describe('onClick(event) ', () => {
    it('hide element on clicking outside when showUpConfirmation is true and click outside nativeElement', () => {
      //arrange
      component.showUpConfirmation = true;
      fixture.detectChanges();
      jest.spyOn(component.confirmationShow.nativeElement, 'contains').mockReturnValue(false);
      const event: Event = new MouseEvent('click', window);
      // act
      component.onClick(event);
      // assert
      expect(component.showUpConfirmation).toEqual(false);
      expect(component.sign).toEqual("down");
    });

    it('hide element on clicking outside when showUpConfirmation is false and click outside nativeElement', () => {
      //arrange
      component.showUpConfirmation = false;
      fixture.detectChanges();
      jest.spyOn(component.confirmationShow.nativeElement, 'contains').mockReturnValue(false);
      const event: Event = new MouseEvent('click', window);
      // act
      component.onClick(event);
      // assert
      expect(component.showUpConfirmation).toEqual(false);
    });

    it(' showUpConfirmation is true and click inside nativeElement', () => {
      //arrange
      component.showUpConfirmation = true;
      fixture.detectChanges();
      jest.spyOn(component.confirmationShow.nativeElement, 'contains').mockReturnValue(true);
      const event: Event = new MouseEvent('click', window);
      // act
      component.onClick(event);
      // assert
      expect(component.showUpConfirmation).toEqual(true);
    });
  });
});
