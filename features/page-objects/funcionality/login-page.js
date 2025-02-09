import loginPage from "../locators/login-page.js";
import { browser, expect as expectWdio } from "@wdio/globals";
import { expect as expectChai } from "chai";

export async function LoginPageSaucedemo(url) {

    await browser.url(url);
    expectWdio(await (await loginPage.passwordInformation()).waitForDisplayed({ timeout: 3000 }));
    expectChai(await browser.getUrl()).to.equal("https://www.saucedemo.com/");
    expectWdio(await loginPage.loginLogo()).toBeDisplayed();
    expectChai(await (await loginPage.loginLogo()).getText()).to.equal("Swag Labs");
    expectWdio(await loginPage.usernameField()).toBeDisplayed();
    expectWdio(await loginPage.passwordField()).toBeDisplayed();
    expectWdio(await loginPage.loginButton()).toBeDisplayed();
    expectChai(await (await loginPage.loginInformationHeader()).getText()).to.equal("Accepted usernames are:");
    expectWdio(await loginPage.loginInformation()).toBeDisplayed();

    const acceptedUsernameElement = await loginPage.loginInformation();
    const acceptedUser = await acceptedUsernameElement.getText();
    const username = acceptedUser
        .replace('Accepted usernames are:', '')
        .split('\n')
        .filter(Boolean);

    const expectedUsername = [
        "standard_user",
        "locked_out_user",
        "problem_user",
        "performance_glitch_user",
        "error_user",
        "visual_user"
    ]

    for (let index = 0; index < expectedUsername.length; index++) {
        expectChai(username[index]).to.equal(expectedUsername[index]);
    }

    expectChai(await (await loginPage.passwordInformationHeader()).getText()).to.equal('Password for all users:');
    const passwordCredentialsElement = await loginPage.passwordInformation();
    const passwordCredential = await passwordCredentialsElement.getText();
    const password = passwordCredential
        .replace('Password for all users:', '')
        .split('\n')[1]

    expectChai(password).to.equal('secret_sauce');

}


export async function UserLogin() {

    await (await loginPage.usernameField()).addValue('standard_user');
    await (await loginPage.passwordField()).addValue('secret_sauce');
    await (await loginPage.loginButton()).click();

}