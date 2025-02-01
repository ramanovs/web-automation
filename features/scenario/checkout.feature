Feature: Checkout Items in Saucedemo


@test_checkout-saucedemo
  Scenario: Checkout Saucedemo
    
    Given Open URL "https://www.saucedemo.com/"
    When User Login using valid credentials
    Then User success redirected to Homepage And Choose Item
    Then User Redirected to Shopping Cart Page
    Then User Redirected to Information Page
    Then User Redirected to Overview Page
    Then User Redirected to Checkout Complete Page
    Then User Click Back To Home Button


    