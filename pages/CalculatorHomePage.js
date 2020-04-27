function HomePage()
{
    this.registerBtn = element(by.css('.btn-warning'));
    this.signinBtn = element(by.css('.btn-primary'));

    this.getUrl = function()
    {
        browser.waitForAngularEnabled(false);
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.driver.manage().window().maximize();
    }

}


module.exports = new HomePage();
