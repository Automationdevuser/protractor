var Objects = require('../Objects.json');
var using = require('jasmine-data-provider');

describe('synchronization',function(){


    beforeEach(function ()
    {
        browser.waitForAngularEnabled(false);

        browser.get(Objects.url);

        browser.driver.manage().window().maximize();

    })

    function logindata()
    {
        return[

            {username:Objects.username1,password:Objects.password1},
            {username:Objects.username2,password: Objects.password2},

        ];
    }


    using(logindata,function(data){

        it('login to app',function () {




            element(by.id(Objects.locators.usernameId)).sendKeys(data.username);

            element(by.id(Objects.locators.passwordId)).sendKeys(data.password);



            element(by.id(Objects.locators.loginBtnId)).click();


            browser.sleep(4000);

            element(by.id(Objects.locators.welcomeTxtId)).click();


            browser.sleep(4000);

            element(by.xpath(Objects.locators.logoutXpath)).click();


        })



    })




})
