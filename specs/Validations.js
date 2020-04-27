var calchomepage = require('../pages/CalculatorHomePage');

var jsonData = require('../Objects.json');


describe('calculator app',function(){


    beforeEach(function ()
    {
      // calchomepage.getUrl();

        browser.waitForAngularEnabled(false);
        browser.get('http://juliemr.github.io/protractor-demo/');


        browser.driver.manage().window().maximize();


    })

    it('validate title',function () {

      var title = browser.getTitle();
        browser.sleep(3000);
      title.then(function(text){

          console.log(text);



          expect(title).toEqual('Super Calculator');  // exact match

          expect(title).not.toEqual('test'); // text not matching or equal

          expect(title).toMatch('Calculator'); // partial matching

      })

    })



})
