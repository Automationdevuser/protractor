describe('repeater tag example',function(){

    it('calculator app', function(){

        browser.get('http://juliemr.github.io/protractor-demo/');

        browser.driver.manage().window().maximize();

        element(by.model('first')).sendKeys('2');
        element(by.model('second')).sendKeys('3');

        element(by.id('gobutton')).click();

        element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function(text){

            console.log(text);

        })



    })







})