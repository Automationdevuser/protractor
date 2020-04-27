function RegistrationPage()
{
    this.nameTextBox = element(by.id('user_name'));
    this.emailTextBox = element(by.id('user_email'));
    this.passwordTextBox = element(by.id('user_password'));
    this.passwordConfTextBox = element(by.id('user_password_confirmation'));
    this.registerBtn = element(by.name('commit'));







}


module.exports = new RegistrationPage();
