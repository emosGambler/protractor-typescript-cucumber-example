import { HomePage } from './../pages/example-page.page';
import { browser, ExpectedConditions as EC } from 'protractor';
import * as chaiAsPromised from 'chai-as-promised';
import * as chai from 'chai';
import * as timeout from './../utils/timeouts';

chai.use(chaiAsPromised);

const expect: any = chai.expect;
const homePage: HomePage = new HomePage();
let expectedName: string;

module.exports = function (): void {
    this.Before(() => {
        browser.ignoreSynchronization = true;
    });

    this.Given(/^I enter angular home page$/, async () => {
        await homePage.open();
    });

    this.Then(/^I should see valid url$/, async () => {
        browser.sleep(timeout.short);
        await expect(browser.getCurrentUrl()).to.eventually.equal(homePage.url);
    });

    this.Given(/^I type new name as '([^"]*)'$/, async (name) => {
        await homePage.setName(name);
        await browser.wait(EC.textToBePresentInElementValue(homePage.nameInput, name), timeout.short);
    });

    this.Then(/^I should see greetings updated with name '([^"]*)'$/, async (name) => {
        await expect(homePage.getGreetings()).to.eventually.equal(`Hello ${name}!`);
    });
};