
Feature: Shopping Basket

  Scenario: Add items to basket
    Given I add 2 units of "The Hobbit" to my shopping basket
    And I add 5 units of "Breaking Bad"
    When I check the content of my shopping basket
    Then it should have been created on the "2020-12-01"
    And it should contain the following items
      | Item            | Quantity  | Price | Total Price |
      | 'The Hobbit'    | 2         | 5.00  | 10.00       |
      | 'Breaking Bad'  | 5         | 7.00  | 35.00       |
    And the cart total is "£45.00"
