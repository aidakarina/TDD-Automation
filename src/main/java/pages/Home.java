package pages;

import org.junit.Assert;
import org.openqa.selenium.By;

import utilities.GeneralUtils;
import utilities.SeleniumUtils;

public class Home {

	private static By logoutButton = By.xpath("//p[text()='Logout']");
	private static By createButton = By.xpath("//*[text()='Create']");

	/**
	 * Verifies header element is displayed
	 */
	public static void verifyLogoutIsDisplayed() {
		String description = "Cafe Townsend is up and running";
		if (SeleniumUtils.elementIsVisible(logoutButton)) {
			GeneralUtils.addStepToTest("pass", description, "CafeTownsendApp");
		} else {
			GeneralUtils.addStepToTest("fail", description, "CafeTownsendApp");
			Assert.fail(description);
		}
	}

	/**
	 * Clicks element in Home Search page
	 * @param elementName - Element to be clicked
	 */
	public static void ClickElement(String elementName) {
		By xpath = By.xpath("//*[text()='" + elementName + "']");
		SeleniumUtils.click(xpath);
	}

	public static void verifyHomeIsDisplayed() {
		String description = "Cafe Townsend [Home] is displayed";
		if (SeleniumUtils.elementIsVisible(createButton)) {
			GeneralUtils.addStepToTest("pass", description, "Home");
		} else {
			GeneralUtils.addStepToTest("fail", description, "Home");
			Assert.fail(description);
		}		
	}

	public static void verifyEmployeeIsDisplayedAsClickableLink(String employeeName) {
		String description = "Verify employee [" + employeeName + "] is displayed as a clickable link";
		By xpath = By.xpath("//li[text()[normalize-space() = '"+employeeName+"']]");
		boolean elementDisplayedAndClickable = SeleniumUtils.elementIsPresent(xpath) && SeleniumUtils.elementIsClickable(xpath);
		if (elementDisplayedAndClickable) {
			SeleniumUtils.scrollIntoView(xpath);
			GeneralUtils.addStepToTest("pass", description, "RecordDisplayed");
		} else {
			GeneralUtils.addStepToTest("fail", description, "RecordDisplayed");
			Assert.fail(description);
		}
		
	}

	public static void selectEmployee(String employeeName) {
		By xpath = By.xpath("//li[text()[normalize-space() = '"+employeeName+"']]");
		SeleniumUtils.scrollIntoView(xpath);
		SeleniumUtils.click(xpath);
		GeneralUtils.addStepToTest("info", "Selected employee ["+employeeName+"]", "EmployeeSelected");
	}

	public static void verifyEmployeeIsNotDisplayed(String employeeName) {
		String description = "Verify employee [" + employeeName + "] is not displayed as a clickable link";
		By xpath = By.xpath("//li[text()[normalize-space() = '"+employeeName+"']]");
		boolean elementNotDisplayed = SeleniumUtils.elementIsNotPresent(xpath);
		if (elementNotDisplayed) {
			GeneralUtils.addStepToTest("pass", description, "RecordDisplayed");
		} else {
			GeneralUtils.addStepToTest("fail", description, "RecordDisplayed");
			Assert.fail(description);
		}
	}
}
