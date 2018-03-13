import { HomePage } from './../pages/example-page.page';
import { Given, When, Then, Before } from 'cucumber';
import { browser } from 'protractor';
import * as chaiAsPromised from 'chai-as-promised';
import * as chai from 'chai';

let angularHomepage: HomePage;
chai.use(chaiAsPromised);
const expect: any = chai.expect;

Before(() => {
    angularHomepage = new HomePage();
});

Given(/^page$/, async function() {
    browser.waitForAngularEnabled(false);
    await angularHomepage.open()
});

Then(/^I should see valid url$/, async function() {
    browser.waitForAngularEnabled(false);
    await expect(browser.getCurrentUrl()).to.eventually.equal('xD')
});