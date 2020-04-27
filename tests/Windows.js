describe('windows example',function(){


    it('switch to window', function(){

        browser.waitForAngularEnabled(false);   // add this line if trying to automate non angular bases application

        browser.get('http://the-internet.herokuapp.com/');

        browser.driver.manage().window().maximize();

        element(by.linkText('Multiple Windows')).click();

        browser.driver.getTitle().then(function(title1){

            console.log("First window title is: " + title1);
        })

        element(by.linkText('Click Here')).click();

        browser.getAllWindowHandles().then(function(handles){

            browser.switchTo().window(handles[1]).then(function () {

                browser.driver.getTitle().then(function(title2){

                    console.log("Second window title is: " + title2);
                })

                element(by.xpath('//h3[contains(text(),"New Window")]')).getText().then(function(text){
                    console.log(text);
                })
            })



        })



    })





})