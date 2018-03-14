import { HomePage } from './../pages/example-page.page';
//import { Given, When, Then, Before } from 'cucumber';
import { browser, ExpectedConditions as EC } from 'protractor';
import * as chaiAsPromised from 'chai-as-promised';
import * as chai from 'chai';

const homePage: HomePage = new HomePage();
chai.use(chaiAsPromised);
const expect: any = chai.expect;

module.exports = function (): void {
    this.Before(() => {
        browser.ignoreSynchronization = true;
    });
    this.Given(/^I enter angular home page$/, async () => {
        await homePage.open();
    });

    this.Then(/^I should see valid url$/, async () => {
        //await expect(browser.getCurrentUrl()).to.eventually.equal(homePage.url);
    });

    this.Given(/^I type new name$/, async () => {
        //name should be taken from scenario
        await homePage.setName('jacek');
    });

    this.Then(/^I should see greetings updated$/, async () => {
        await browser.wait(EC.textToBePresentInElement(homePage.greeting, 'Hello jacek!'), 5000);
        await expect(homePage.getGreetings()).to.eventually.equal(`Hello jacek!`);
    });
};