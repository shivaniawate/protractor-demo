import { browser, by, element } from 'protractor';

export class AppPage {
  getTime(hours: number): string {
    const time  = ((hours + 11) % 12 + 1);
    let suffix: string;

    if ( (hours >= 0 && hours < 12) || (hours >= 24 && hours < 36)) {
      suffix = 'am';
    } else {
      suffix = 'pm';
    }

    return time + suffix;
  }
}