describe('To do list app',function()
{


         it('test1',function() {
             // browser.waitForAngularEnabled(false)
             browser.get('http://www.helpingtesters.com/practice/protractor/index.php');
             browser.driver.manage().window().maximize();

             element(by.xpath('//a[contains(text(),"Social Account Project")]')).click();


             element(by.model('name')).sendKeys('Vaibhav');
             element(by.model('password')).sendKeys('HelpingTesters');

             element(by.id('submit')).click();

             browser.switchTo().alert().accept();

             element(by.xpath('//h4[contains(text(),"Hello, how are you Vaibhav")]')).getText().then(function (text) {
                 console.log(text);
             })

             element(by.xpath('(//a[contains(text(),"Send Message")])[1]')).click();

             browser.actions().mouseMove(element(by.model("sentmessage")).sendKeys("hello")).perform();

             element(by.id('submit')).click();

             browser.switchTo().alert().accept();

             browser.navigate().back();

             browser.navigate().back();

             element(by.xpath('(//a[contains(text(),"View Profile")])[1]')).click();

             expect(element(by.xpath('//p[contains(text(),"hello")]')) .isDisplayed()).toBe(true);


             element(by.xpath('//p[contains(text(),"hello")]')).getText().then(function (text) {
                 console.log(text);
             })


         })
})