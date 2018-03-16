import { $, $$, browser, element, by, promise, ElementFinder, ExpectedConditions as EC } from 'protractor';
import * as timeout from './../utils/timeouts';

export class HomePage {
    public url: string;
    private container: ElementFinder;

    public greeting: ElementFinder;
    public nameInput: ElementFinder;

    constructor() {
        this.url = 'https://angularjs.org/';
        this.container = $$('.container').get(3);

        this.greeting = this.container.$('div > h1');
        this.nameInput = this.container.$('input[placeholder="Enter a name here"]');
    }

    public open(): void {
        browser.get(this.url);
        browser.refresh();
    };

    public setName(userName: string): void {
        browser.wait(EC.visibilityOf(this.nameInput), timeout.standard);
        this.nameInput.clear().then(() => {
            this.nameInput.sendKeys(userName);
        });
    };
    
    public getName(): promise.Promise<string> {
        return this.nameInput.getAttribute('value');
    };

    public getGreetings(): promise.Promise<string> {
        return this.greeting.getText();
    };
}