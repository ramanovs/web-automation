class LoginPage {
    async loginLogo() {
        return await $('[class="login_logo"]');
    }
    async usernameField() {
        return await $('[id="user-name"]');
    }
    async passwordField() {
        return await $('[name="password"]');
    }
    async loginButton() {
        return await $('[name="login-button"]');
    }
    async loginInformationHeader() {
        return await $('h4=Accepted usernames are:')
    }
    async loginInformation() {
        return await $('[id="login_credentials"]');
    }
    async passwordInformationHeader() {
        return await $('h4=Password for all users:')
    }
    async passwordInformation() {
        return await $('[class="login_password"]');
    }
}
export default new LoginPage();
