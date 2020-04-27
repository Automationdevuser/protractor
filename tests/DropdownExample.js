describe('repeater tag example',function(){


    function Dropdown(a,b,c)
    {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);


        element.all(by.tagName('option')).each(function(item){

            item.getAttribute('value').then(function (val) {


                if(val==c)
                {
                    item.click();
                }
            })
        })


        element(by.id('gobutton')).click();
    }

    it('calculator app', function(){

        browser.get('http://juliemr.github.io/protractor-demo/');

        browser.driver.manage().window().maximize();

       Dropdown(1,2,"ADDITION");
       Dropdown(10,5,"DIVISION");
       Dropdown(12,6,"MODULO");
       Dropdown(5,6,"MULTIPLICATION");
       Dropdown(10,5,"SUBTRACTION");



        element.all(by.repeater('result in memory')).each(function(item){

            item.element(by.css('td:nth-child(3)')).getText().then(function (text) {
                console.log(text);
            })
        })






    })







})