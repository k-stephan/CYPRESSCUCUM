Feature: Login into the MARS Site with valid data

@focus
Scenario: Login to MARS App

    Given I open the website
    When Enter "SFSMARSW" and "mars1"         
    And I click the login button
    Then I should be logged in


Scenario: Access Reports Menu
    Given Click reports Menu
    then click eis
