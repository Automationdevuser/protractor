describe('synchronization',function(){

    it('implicit wait example',function () {


        browser.waitForAngularEnabled(false);

        browser.get('https://opensource-demo.orangehrmlive.com/');

        browser.driver.manage().window().maximize();


        element(by.id('txtUsername')).sendKeys('Admin');

        element(by.id('txtPassword')).sendKeys('admin123');

        var ec = protractor.ExpectedConditions;

        browser.wait(ec.elementToBeClickable,3000);

        element(by.id('btnLogin')).click();


        browser.wait(ec.textToBePresentInElement(element(by.xpath('//a[contains(text(),"Welcome Admin")]')),'Welcome Admin'),5000);



        element(by.xpath('//a[contains(text(),"Welcome Admin")]')).getText().then(function(text){

            console.log(text);
            expect(element(by.id('welcome')).getText()).toBe('Welcome Admin');
        })


    })




})