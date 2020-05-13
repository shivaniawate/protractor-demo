import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getTime(hours: number): string {
    const time  = ((hours + 11) % 12 + 1);
    console.log('hours ' + hours);

    let suffix: string;
    // it is pm if hours from 12 onwards
    if ( (hours >= 0 && hours < 12) || (hours >= 24 && hours < 36)) {
      suffix = 'am';
    } else {
      suffix = 'pm';
    }

    return time + suffix;

    // const ampm = hours >= 12 ? 'pm' : 'am';
    // hours = hours % 12;
    // hours = hours ? hours : 12;  // the hour '0' should be '12'

    // return hours + ampm;
  }

  // getTime(hour: number): string {
  //   const time  = ((hour + 11) % 12 + 1);
  //   // let suffix: string;
  //   // // it is pm if hours from 12 onwards
  //   // (hour === 0) ? (suffix = 'am') : (suffix = (hour >= 12) ? 'pm' : 'am');

  //   return time.toString();
  // }

// 3 condition: 
 // const now = element(by.id('timeline')).element(by.className('Now'));
 const lowtext = element(by.id('title')).element(by.className('low-temp-text'));
 expect(lowtext.getText()).toContain('43');
 //const hightext = element(by.id('title')).element(by.className('high-temp-text'));
}

