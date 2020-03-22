import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorPageComponent } from './calculator-page.component';
import { CalculatorService } from '../../Services/calculator.service';
import { HttpClientModule } from '@angular/common/http';
import { UserInputModel } from '../../Models/UserInputModel';

describe('CalculatorPageComponent', () => {
  let component: CalculatorPageComponent;
  let fixture: ComponentFixture<CalculatorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorPageComponent],
      providers: [CalculatorService],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.userInput = new UserInputModel();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submittedDate method should simply assign userInput.RideDate to given event', () => {
    component.submittedDate("test");
    
    expect(component.userInput.RideDate).toBe("test");
  });

  it('submittedStartTime method should simply assign userInput.RideStartTime to given event', () => {
    component.submittedStartTime("test");
    
    expect(component.userInput.RideStartTime).toBe("test");
  });

  it('submittedBelow method should simply assign userInput.BelowSix to given event', () => {
    component.submittedBelow(5);
    
    expect(component.userInput.BelowSix).toBe(5);
  });

  it('submittedOver method should simply assign userInput.OverSixOrStationary to given event', () => {
    component.submittedOver(5);
    
    expect(component.userInput.OverSixOrStationary).toBe(5);
  });

  it('checkInputs should validate userInput.RideDate and return false', () => {
    component.submittedDate("test");
    component.submittedStartTime("10:30AM");
    component.submittedBelow(5);
    component.submittedOver(5);

    const result = component.checkInputs();
    
    expect(result).toBe(false);
  });

  it('checkInputs should validate userInput.RideStartTime and return false', () => {
    component.submittedDate("03/21/2020");
    component.submittedStartTime("test");
    component.submittedBelow(5);
    component.submittedOver(5);

    const result = component.checkInputs();
    
    expect(result).toBe(false);
  });

  it('checkInputs should validate userInput.BelowSix and return false', () => {
    component.submittedDate("03/21/2020");
    component.submittedStartTime("10:30AM");
    component.submittedBelow("test");
    component.submittedOver(5);

    const result = component.checkInputs();
    
    expect(result).toBe(false);
  });

  it('checkInputs should validate userInput.OverSixOrStationary and return false', () => {
    component.submittedDate("03/21/2020");
    component.submittedStartTime("10:30AM");
    component.submittedBelow(5);
    component.submittedOver("test");

    const result = component.checkInputs();
    
    expect(result).toBe(false);
  });

  it('checkInputs should validate userInput.BelowSix to > -1 and return false', () => {
    component.submittedDate("03/21/2020");
    component.submittedStartTime("10:30AM");
    component.submittedBelow(-1);
    component.submittedOver(5);

    const result = component.checkInputs();
    
    expect(result).toBe(false);
  });

  it('checkInputs should validate userInput.OverSixOrStationary to > -1 and return false', () => {
    component.submittedDate("03/21/2020");
    component.submittedStartTime("10:30AM");
    component.submittedBelow(5);
    component.submittedOver(-1);

    const result = component.checkInputs();
    
    expect(result).toBe(false);
  });

  it('checkInputs should validate userInput object and return true', () => {
    component.submittedDate("03/21/2020");
    component.submittedStartTime("10:30AM");
    component.submittedBelow(5);
    component.submittedOver(5);

    const result = component.checkInputs();
    
    expect(result).toBe(true); 
  });
});
