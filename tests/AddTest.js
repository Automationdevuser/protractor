describe('Calculator Test',function(){


    it('Add Numbers',function()
    {
        browser.get('http://juliemr.github.io/protractor-demo/');

        browser.driver.manage().window().maximize();

        expect(element(by.xpath('//h3[contains(text(),"Super Calculator")]')).getText()).toBe('Super Calculator');

        element(by.model('first')).sendKeys('4');

        element(by.model('second')).sendKeys('3');

        element(by.id('gobutton')).click();

        element(by.binding('latest')).getText().then(function (text) {

            console.log(text);

        })



        expect(element(by.binding('latest')).getText()).toBe('7');

    })








})
