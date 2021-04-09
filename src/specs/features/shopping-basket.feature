
Feature: Shopping Basket

  Scenario: Add items to basket
    Given I add 2 units of "The Hobbit" to my shopping basket
    And I add 5 units of "Breaking Bad"
    When I check the content of my shopping basket
    Then it should contain the following information
