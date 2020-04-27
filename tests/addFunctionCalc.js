describe('repeater tag example',function(){

    function AddNum(a,b)
    {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);

        element(by.id('gobutton')).click();
    }

    it('calculator app', function(){

        browser.get('http://juliemr.github.io/protractor-demo/');

        browser.driver.manage().window().maximize();

        AddNum(2,5);
        AddNum(3,2);
        AddNum(7,5);
        AddNum(9,2);
        AddNum(8,1);



       element.all(by.repeater('result in memory')).each(function(item){

           item.element(by.css('td:nth-child(3)')).getText().then(function (text) {
                    console.log(text);
           })
       })



    })







})