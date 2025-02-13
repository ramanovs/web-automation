Feature: Checkout Items in Saucedemo


#Creds : valid, locked
#Items : BACKPACK, BIKELIGHT, TSHIRT, JACKET, ONESIE, REDTSHIRT 


@test_checkout-saucedemo
  Scenario: Checkout Saucedemo
    
    Given Open URL "https://www.saucedemo.com/"
    When User Login using "valid" credentials
    Then User success redirected to Homepage 
    And User add "REDTSHIRT" to Cart
    Then User Redirected to Shopping Cart Page
    Then User Redirected to Information Page
    Then User Redirected to Overview Page
    Then User Redirected to Checkout Complete Page
    And User Click Back To Home Button
    Then User success redirected to Homepage 
