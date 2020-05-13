import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';
import { ConditionalExpr } from '@angular/compiler';


describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getParagraphText()).toEqual('Welcome to selenium-protactor!');
  // });

  it('launch google', () => {
   // page.navigateTo();
   browser.waitForAngularEnabled(false);
    browser.get('https://darksky.net/');
    // expect(page.getParagraphText()).toEqual('Welcome to selenium-protactor!');

    const searchBox = element(by.id('searchForm')).element(by.tagName('input'));
    const searchButton = element(by.id('searchForm')).element(by.css('.searchButton'));
    searchBox.clear();
    searchBox.sendKeys('10001');
    searchButton.click();


    const currentTime = new Date().getHours();
     console.log(currentTime);
    // console.log('current:' + (page.getTime(currentTime)));
    // console.log(currentTime);
    // browser.sleep(2000);


    for (let i = 1; i <= 22; i = i + 2) {
      if (i === 1) {
        // const now = element(by.id('timeline')).element(by.className('Now'));
        const now = browser.findElement(by.className('Now'));
        expect(now.getText()).toBe('Now');
        i = i - 1;
      } else {
        console.log(page.getTime(currentTime + i));
        const forecastHours = element(by.id('timeline')).element(by.className(page.getTime(currentTime + i)));
        expect(forecastHours.getText()).toEqual(page.getTime(currentTime + i));
        console.log('end of test');
      }
    }
  });
});
