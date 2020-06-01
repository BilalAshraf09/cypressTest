import * as login_page_object  from '../../../page_objects/login/login_actions_page_object';

describe('Login to application', () => {
	
	context('Valid Login to application', function() {
		it('Logs in correctly with valid users', () => {
			login_page_object.OpenWebsite('https://www.etsy.com');
			login_page_object.ClickLoginButton();
			login_page_object.ClickSignInButton("bilalashraf.it@gmail.com","test123");
			login_page_object.CheckHomePage();
		});
	});
});
