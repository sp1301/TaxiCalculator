import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });


  it('should get right total cost', () =>{
    page.navigateTo();
    page.SetDate("03/21/2020");
    page.SetTime("8:00PM");
    page.SetBelow(5);
    page.SetOver(5);
    page.GetSubmit().click();
    browser.sleep(3000);

    expect(page.GetResultText()).toBe('Total Cost: $14.5');

  });

});
