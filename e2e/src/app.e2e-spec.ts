import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';
import { ConditionalExpr } from '@angular/compiler';


describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('launch darksky and forecast hours in timeline incremented by 2 hours for next 24 hours', () => {
    browser.waitForAngularEnabled(false);
    browser.get('https://darksky.net/');

    const searchBox = element(by.id('searchForm')).element(by.tagName('input'));
    const searchButton = element(by.id('searchForm')).element(by.css('.searchButton'));
    searchBox.clear();
    searchBox.sendKeys('10001');
    searchButton.click();

    const currentTime = new Date().getHours() + 1;
    browser.sleep(2000);


    for (let i = 1; i <= 22; i = i + 2) {
      if (i === 1) {
        const now = browser.findElement(by.className('Now'));
        expect(now.getText()).toBe('Now');
        i = i - 1;
      } else {
        const forecastHours = element(by.id('timeline')).element(by.className(page.getTime(currentTime + i)));
        expect(forecastHours.getText()).toEqual(page.getTime(currentTime + i));
      }
    }
  });

    it('verify current temp is greater than lowest value temp and less than the highest value temp', async () => {
      browser.waitForAngularEnabled(false);
      browser.get('https://darksky.net/');

      const searchBox = element(by.id('searchForm')).element(by.tagName('input'));
      const searchButton = element(by.id('searchForm')).element(by.css('.searchButton'));
      searchBox.clear();
      searchBox.sendKeys('10001');
      searchButton.click();

      await browser.sleep(2000);
      const currentTemp = await browser.findElement(by.id('timeline'))
                          .findElement(by.className('temps'))
                          .findElement(by.className('first')).getText();
      const lowTemp = await browser.findElement(by.className('low-temp-text')).getText();
      const highTemp = await browser.findElement(by.className('high-temp-text')).getText();

      expect(parseInt(currentTemp)).toBeGreaterThan(parseInt(lowTemp));
      expect(parseInt(currentTemp)).toBeLessThan(parseInt(highTemp));

    });

});