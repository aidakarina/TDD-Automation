package utilities;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;

public class SeleniumUtils {
	public static int screenshotCount = 0;

	public static void navigateTo(String url) {
		DriverFactory.getDriver().get(url);
	}

	public static String getTitlePage() {
		return DriverFactory.getDriver().getTitle();
	}

	public static boolean alertIsPresent() {
		Alert alert = DriverFactory.getDriverWait().until(ExpectedConditions.alertIsPresent());
		if (alert.equals(null)) {
			return false;
		} else {
			return true;
		}
	}

	public static String getAlertText() {
		return DriverFactory.getDriver().switchTo().alert().getText();
	}

	public static void acceptAlert() {
		DriverFactory.getDriver().switchTo().alert().accept();
	}

	public static WebElement getElement(By locator) {
		return DriverFactory.getDriver().findElement(locator);
	}

	public static WebElement waitVisible(By locator) {
		return DriverFactory.getDriverWait().until(ExpectedConditions.visibilityOfElementLocated(locator));
	}

	public static WebElement waitClickable(By locator) {
		return DriverFactory.getDriverWait().until(ExpectedConditions.elementToBeClickable(locator));
	}

	public static boolean elementIsClickable(By locator) {
		WebElement element = waitClickable(locator);
		return element.isDisplayed();
	}

	public static boolean elementIsVisible(By locator) {
		WebElement element = waitVisible(locator);
		return element.isDisplayed();
	}

	public static boolean elementIsEnabled(By locator) {
		WebElement element = waitVisible(locator);
		return element.isEnabled();
	}

	public static boolean elementIsPresent(By locator) {
		return DriverFactory.getDriver().findElements(locator).size() > 0;
	}

	public static boolean elementIsNotPresent(By locator) {
		return DriverFactory.getDriver().findElements(locator).size() < 1;
	}

	public static Select selectDropdownOption(By locator, String selectBy, String value) {
		WebElement element = waitVisible(locator);
		return selectDropdownOption(element, selectBy, value);
	}

	public static Select selectDropdownOption(WebElement element, String selectBy, String value) {
		Select select = new Select(element);

		switch (selectBy.toLowerCase()) {
		case "text":
			select.selectByVisibleText(value);
			break;
		case "index":
			select.selectByIndex(Integer.valueOf(value));
			break;
		case "value":
			select.selectByValue(value);
		case "containstext":
			selectContainsText(select, value);
		default:
			return null;
		}
		return select;
	}

	public static void selectContainsText(Select select, String value) {
		List<WebElement> options = select.getOptions();
		for (WebElement option : options) {
			String visibleText = option.getText();
			if (visibleText.contains(value)) {
				select.selectByVisibleText(visibleText);
				break;
			}
		}
	}

	public static WebElement sendKeys(By locator, String text) {
		WebElement element = waitVisible(locator);
		return sendKeys(element, text);

	}

	public static WebElement sendKeys(WebElement element, String text) {
		element.clear();
		element.sendKeys(text);
		return element;
	}

	public static WebElement click(By locator) {
		WebElement element = waitVisible(locator);
		return click(element);
	}

	public static WebElement click(WebElement element) {
		element.click();
		return element;
	}

	public static String getText(By locator) {
		WebElement element = waitVisible(locator);
		return getText(element);
	}

	public static String getText(WebElement element) {
		return element.getText();
	}

	public static String getAttributeValue(By locator, String attributeName) {
		WebElement element = waitVisible(locator);
		return getAttributeValue(element, attributeName);
	}

	public static String getAttributeValue(WebElement element, String attributeName) {
		return element.getAttribute(attributeName);
	}

	public static void scrollIntoView(By locator) {
		if (elementIsPresent(locator)) {
			WebElement element = getElement(locator);
			JavascriptExecutor js = ((JavascriptExecutor) DriverFactory.getDriver());
			js.executeScript("arguments[0].scrollIntoView();", element);
		}
	}

	public static void takeScreenShot(String name) {
		String path = GeneralUtils.getResultsDirectory() + "/screenshots";
		File scrFile = ((TakesScreenshot) DriverFactory.getDriver()).getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(scrFile, new File(path, screenshotCount + "_" + name + ".png"));
		} catch (IOException e) {
			System.out.println("Take Screenshot");
		}
	}

}
