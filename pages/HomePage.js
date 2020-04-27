function HomePage()
{
    this.registerBtn = element(by.css('.btn-warning'));


    this.getUrl = function()
    {
        browser.waitForAngularEnabled(false);
        browser.get('https://qa-test.avenuecode.com/');
        browser.driver.manage().window().maximize();
    }

    this.clicksigninBtn = function () {
        element(by.css('.btn-primary')).click();
    }

}


module.exports = new HomePage();
