import { TimeValidatorDirective } from './time-validator.directive';

describe('TimeValidatorDirective', () => {
  it('should create an instance', () => {
    const directive = new TimeValidatorDirective(undefined,undefined);
    expect(directive).toBeTruthy();
  });
});
