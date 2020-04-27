

describe('Calculator App',function(){

it('Add',function(){

      browser.get('http://juliemr.github.io/protractor-demo/');
      browser.driver.manage().window().maximize();


      element(by.model('first')).sendKeys('5');
      element(by.model('second')).sendKeys('4');

      element(by.id('gobutton')).click();

     //

      element(by.binding('latest')).getText().then(function(text){
          
      console.log(text);

            expect(element(by.xpath('//h2[@class="ng-binding"]')).getText()).toBe('9');

      

      

      })
 
       
})



})