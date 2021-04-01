const homePage = require('../pages/homePage.js');

Given('I am on home page', () => {
    homePage.goHomePage();    
});
And('I choose some maximum product price', () => {
    homePage.scrollDown();
});
When('I click in this price category', () => {
    homePage.clickMaxPrice();
});
Then('I should only see products no more expensive than the choosen price', () => {
    homePage.checkValue()
});