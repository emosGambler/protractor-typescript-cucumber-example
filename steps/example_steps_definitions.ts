import { HomePage } from './../pages/example-page.page';
import { Given, When, Then, Before } from 'cucumber';
import { browser } from 'protractor';
import * as chaiAsPromised from 'chai-as-promised';
import * as chai from 'chai';

let homePage: HomePage;
chai.use(chaiAsPromised);
const expect: any = chai.expect;

Before(() => {
    homePage = new HomePage();
});

Given(/^I enter angular home page$/, async function() {
    await homePage.open()
});

Then(/^I should see valid url$/, async function() {
    await expect(browser.getCurrentUrl()).to.eventually.equal(homePage.url);
});

Given(/^I type new name$/, async function() {
    //name should be taken from scenario
    await homePage.setName('jacek');
});

Then(/^I should see new name$/, async function() {
    await expect(homePage.getName()).to.eventually.equal('jacek');
});

Then(/^I should see greetings updated$/, async function() {
    await expect(homePage.getGreetings()).to.eventually.equal(`Hello jacek!`);
});