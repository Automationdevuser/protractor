describe('Alert Test',function(){


    it('test1',function(){
         browser.get('http://www.helpingtesters.com/practice/protractor/index.php');

         browser.driver.manage().window().maximize();

         element(by.xpath('//a[contains(text(),"Social Account Project")]')).click();

         element(by.model('name')).sendKeys('Vaibhav');

         element(by.model('password')).sendKeys('HelpingTesters');

         element(by.id('submit')).click();

         browser.switchTo().alert().accept();

         element(by.xpath('//h4[contains(text(),"Hello, how are you Vaibhav")]')).getText().then(function(text)
         {

             console.log(text);

         })




     })




})