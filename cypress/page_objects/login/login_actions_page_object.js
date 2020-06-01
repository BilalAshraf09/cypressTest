import * as login from '../login/login_elements_page_object';
require('cypress-xpath')

export const ClickLoginButton = () => {
	return (
		cy
			.xpath(login.SignIn_Button)
			.wait(5000)
			.should('be.visible')
			.click()
	);
};

export const OpenWebsite = (url) => {
	return (
		cy
			.visit(url)
	);
};

export const ClickSignInButton = (emailAddress,password) => {
	return (
		cy
			.xpath(login.Email_Textbox)
			.type(emailAddress)
			.xpath(login.Password_Textbox)
			.type(password)
			.xpath(login.LogIn_Button)
			.click()
			.wait(5000)
		);
};

export const CheckHomePage = () => {
	return (
		cy
			.get('.nav-icon-image')
			.wait(5000)
			.should('be.visible')
	);
};
