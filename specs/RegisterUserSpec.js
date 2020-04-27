var homepage = require('../pages/HomePage.js');
var registrationpage = require('../pages/RegistrationPage.js');
var dashboardpage  = require('../pages/DashBoardPage.js');
var jsonData = require('../Objects.json');
var logger = require('../logger');

describe('qa test app',function(){


    beforeEach(function ()
    {
       homepage.getUrl();
       logger.log('info','Navigated to URL');

    })

    it('Click Register',function () {

        homepage.registerBtn.click();
        logger.log('info','Clicked on Register Button');
       // browser.sleep(3000);
        registrationpage.nameTextBox.sendKeys(jsonData.name);
        logger.log('info','Entered Name');

        registrationpage.emailTextBox.sendKeys(jsonData.email);
        logger.log('info','Entered Email');

        registrationpage.passwordTextBox.sendKeys(jsonData.pwd);
        logger.log('info','Entered Password');

        registrationpage.passwordConfTextBox.sendKeys(jsonData.pwd);
        logger.log('info','Confirm password');

        registrationpage.registerBtn.click();
        logger.log('info','Click register button');

        dashboardpage.signUpConfMsg.getText().then(function(msg)
        {
            console.log(msg);
        })
    })



})
