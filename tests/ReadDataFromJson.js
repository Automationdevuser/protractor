var Objects = require('../Objects.json');

describe('synchronization',function(){

    it('implicit wait example',function () {


        browser.waitForAngularEnabled(false);

        browser.get(Objects.url);

        browser.driver.manage().window().maximize();


        element(by.id(Objects.locators.usernameId)).sendKeys(Objects.username);

        element(by.id(Objects.locators.passwordId)).sendKeys(Objects.password);

        var ec = protractor.ExpectedConditions;

        browser.wait(ec.elementToBeClickable,3000);

        element(by.id(Objects.locators.loginBtnId)).click();





    })




})
