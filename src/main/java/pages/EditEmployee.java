package pages;

import org.openqa.selenium.By;

import utilities.SeleniumUtils;

public class EditEmployee {
	
	private static By updateEmployeeButton = By.xpath("//*[text()='Update']");
	private static By firstNameTextbox = By.xpath("//span[text()='First name:']/following-sibling::input[1]");
	private static By lastNameTextbox = By.xpath("//span[text()='Last name:']/following-sibling::input[1]");
	private static By startDateTextbox = By.xpath("//span[text()='Start date:']/following-sibling::input[1]");
	private static By emailTextbox = By.xpath("//span[text()='Email:']/following-sibling::input[1]");
	
	public static void enterFirstName(String firstName) {
		SeleniumUtils.sendKeys(firstNameTextbox, firstName);	
	}

	public static void enterLastName(String lastName) {
		SeleniumUtils.sendKeys(lastNameTextbox, lastName);
	}

	public static void enterStartDate(String startDate) {
		SeleniumUtils.sendKeys(startDateTextbox, startDate);
	}

	public static void enterEmail(String email) {
		SeleniumUtils.sendKeys(emailTextbox, email);
	}

	public static void clickUpdate() {
		SeleniumUtils.click(updateEmployeeButton);
	}
}
