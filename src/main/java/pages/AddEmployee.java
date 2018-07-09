package pages;

import org.openqa.selenium.By;

import utilities.GeneralUtils;
import utilities.SeleniumUtils;

public class AddEmployee {

	private static By addEmployeeButton = By.xpath("//*[text()='Add']");
	private static By firstNameTextbox = By.xpath("//span[text()='First name:']/following-sibling::input[1]");
	private static By lastNameTextbox = By.xpath("//span[text()='Last name:']/following-sibling::input[1]");
	private static By startDateTextbox = By.xpath("//span[text()='Start date:']/following-sibling::input[1]");
	private static By emailTextbox = By.xpath("//span[text()='Email:']/following-sibling::input[1]");
	
	public static void verifyElementIsEnabledAndDisplayed(String elementName, String xpathLocator){
		By xpath = By.xpath(xpathLocator);
		String description = "Element ["+elementName+"] is enabled & displayed";
		boolean elementDisplayed = SeleniumUtils.elementIsVisible(xpath);
		boolean elementEnabled = SeleniumUtils.elementIsEnabled(xpath);
		if (elementDisplayed && elementEnabled) {
			GeneralUtils.addStepToTest("pass", description);
		} else {
			GeneralUtils.addStepToTest("fail", description);
		}
	}

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

	public static void clickAdd() {
		SeleniumUtils.click(addEmployeeButton);
	}

}
