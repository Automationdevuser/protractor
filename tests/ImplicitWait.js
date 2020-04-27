describe('synchronization',function(){

    it('implicit wait example',function () {


        browser.waitForAngularEnabled(false);

        browser.get('https://opensource-demo.orangehrmlive.com/');

        browser.driver.manage().window().maximize();

        browser.manage().timeouts().implicitlyWait(3000);

        element(by.id('txtUsername')).sendKeys('Admin');

        element(by.id('txtPassword')).sendKeys('admin123');

        element(by.id('btnLogin')).click();


    })




})