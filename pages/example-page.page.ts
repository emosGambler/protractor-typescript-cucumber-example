import { $, $$, browser, element, by, promise, ElementFinder, ExpectedConditions as EC } from 'protractor';
var fs = require('fs');

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
    };

    public setName(userName: string): void {
        this.nameInput.clear();
        this.nameInput.sendKeys(userName);
    };
    
    public getName(): promise.Promise<string> {
        return this.nameInput.getAttribute('value');
    };

    public getGreetings(): promise.Promise<string> {
        return this.greeting.getText();
    };
}