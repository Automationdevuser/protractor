describe('frames example',function(){


    it('test', function(){

        browser.waitForAngularEnabled(false);

        browser.get('http://the-internet.herokuapp.com/');

        browser.driver.manage().window().maximize();

        element(by.linkText('Frames')).click();

        element(by.linkText('iFrame')).click();

        browser.driver.switchTo().frame(element(by.id('mce_0_ifr')).getWebElement());

        element(by.xpath('//p[contains(text(),"Your content goes here.")]')).getText().then(function(text){

            console.log(text);

        })

       // browser.driver.switchTo().defaultContent();  // switch back to application from frame
    })





})