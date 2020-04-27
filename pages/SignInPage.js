var PropertiesReader = require('properties-reader');
var or = PropertiesReader('./features/properties/or.properties');



function SignInPage()
{

    this.enterEmail = function ()
    {
        element(by.id(user_name)).sendKeys()
    }







}


module.exports = new SignInPage();
