Feature: Shopping Basket

  Scenario: User adds items to the shopping basket
    Given User adds 2 units of the Hobbit to their shopping basket
    And User adds 5 units of Breaking Bad to their shopping basket
    When User checks the content of their shopping basket
    Then They should see the following information
      """
      {
        creationDate: "2021-05-25",
        units: [
          {
            name: "The Hobbit",
            quantity: 2,
            pricePerItem: 5,
            total: 10
          },
          {
            name: "Breaking Bad",
            quantity: 5,
            pricePerItem: 7,
            total: 35
          }
        ],
        totalPrice: 45,
        currency: "GBP"
      }
      """