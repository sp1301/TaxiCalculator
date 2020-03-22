import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  SetDate(date: string){
    element(by.name('dateTextBox')).element(by.css('custom-text-box input')).sendKeys(date);
  }
  SetTime(time: string){
    element(by.name('timeTextBox')).element(by.css('custom-text-box input')).sendKeys(time);
  }
  SetBelow(below: number){
    element(by.name('belowTextBox')).element(by.css('custom-text-box input')).sendKeys(below);
  }
  SetOver(over: number){
    element(by.name('aboveTextBox')).element(by.css('custom-text-box input')).sendKeys(over);
  }
  GetSubmit(){
    return element(by.name('submitButton')).element(by.css('custom-button button'));
  }

  GetResultText(){
    return element(by.name('resultCost')).getText();
  }
}
