Feature: Running Cucumber with Protractor
    As a humble tester
    I should be able to show you how to write these tests
    In order for you to not waste so much time as me when setting this thing up

    Scenario: Entering angular home page
        Given I enter angular home page
        Then I should see valid url

    Scenario Outline: Updating name
         Given I type new name as '<name>'
          Then I should see greetings updated with name '<name>'
          
         Examples: 
         |  name  | 
         | Jacek  | 
         | Placek | 
         