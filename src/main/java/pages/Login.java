package pages;

import org.openqa.selenium.By;

import utilities.SeleniumUtils;

public class Login {
	
	private static By usernameTextbox = By.xpath("//span[contains(text(),'Username')]/following::input[1]");
	private static By passwordTextbox = By.xpath("//span[contains(text(),'Password')]/following::input[1]");
	private static By loginButton = By.xpath("//button[text()='Login']");
	
	/**
	 * Login to application
	 */
	public static void loginToCafeTownsend(String username, String password) {		
		SeleniumUtils.sendKeys(usernameTextbox, username);
		SeleniumUtils.sendKeys(passwordTextbox, password);
		SeleniumUtils.click(loginButton);
	}

}
