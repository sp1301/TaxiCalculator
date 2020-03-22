import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { HttpClientModule } from '@angular/common/http';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]

    });
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
