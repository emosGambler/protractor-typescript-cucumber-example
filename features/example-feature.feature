Feature: Running Cucumber with Protractor
    As a humble tester
    I should be able to show you how to write these tests
    In order for you to learn how to do it

    Scenario: Entering angular home page
        Given I enter angular home page
        Then I should see valid url

    Scenario Outline: Updating name
         Given I type new name
          Then should see greetings updated
          
         Examples: 
         |  name  | 
         | Jacek | 
         | Placek | 
         