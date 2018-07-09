package utilities;

import java.io.File;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;

import com.aventstack.extentreports.MediaEntityBuilder;
import com.aventstack.extentreports.MediaEntityModelProvider;

import reports.ExtentReport;

public class GeneralUtils {

	public static String getWorkingDirectory() {
		return System.getProperty("user.dir");
	}

	public static String getResultsDirectory() {
		return getWorkingDirectory() + "/target/results";
	}

	public static boolean deleteCreateDirectory(String directoyPath) {
		File directory = new File(directoyPath);
		if (directory.isDirectory()) {
			deleteDirectory(directory);
		}
		return directory.mkdir();
	}

	public static boolean deleteDirectory(String directoryPath) {
		File directory = new File(directoryPath);
		return deleteDirectory(directory);
	}

	public static boolean deleteDirectory(File directory) {

		if (directory.isDirectory()) {
			String[] children = directory.list();
			for (int i = 0; i < children.length; i++) {
				boolean success = deleteDirectory(new File(directory, children[i]));
				if (!success) {
					return false;
				}
			}
		}
		return directory.delete();
	}

	public static void addStepToTest(String status, String description, String screenshotName) {
		try {
			SeleniumUtils.screenshotCount++;
			String filePath = "screenshots/" + SeleniumUtils.screenshotCount + "_" + screenshotName + ".png";
			SeleniumUtils.takeScreenShot(screenshotName);
			MediaEntityModelProvider mediaEntityModel = MediaEntityBuilder.createScreenCaptureFromPath(filePath)
					.build();
			ExtentReport.addStepToTest(status, description, mediaEntityModel);
		} catch (Exception e) {
			System.out.println("Take Screenshot");
		}

	}

	public static void addStepToTest(String status, String description) {
		ExtentReport.addStepToTest(status, description);
	}
	
	/**
	 * Verifies Employee form is displayed
	 */
	public static void verifyEmployeeFormIsDisplayed() {
		By addEmployeeForm = By.xpath("//form[@name='employeeForm']");
		String description = "Employee form is displayed";
		if (SeleniumUtils.elementIsVisible(addEmployeeForm)) {
			addStepToTest("pass", description, "EmployeeForm");
		} else {
			addStepToTest("fail", description, "EmployeeForm");
		}
	}
	
	public static void verifyElementsAreDisplayedAndEnabled(List<Map<String, String>> elementsTable) {
		for (Map<String, String> map : elementsTable) {
			String elementName = map.get("element");
			String xpathLocator = map.get("xpath_locator");
			String description = "Element ["+elementName+"] is displayed & enabled";
			By locator = By.xpath(xpathLocator);
			boolean elementVisibleAndEnabled = SeleniumUtils.elementIsVisible(locator)
					&& SeleniumUtils.elementIsEnabled(locator);
			if(elementVisibleAndEnabled){
				addStepToTest("pass", description);
			}else{
				addStepToTest("fail", description);
			}
		}
		addStepToTest("info", "Elements displayed in form", "ElementsInForm");
	}
	
	public static void verifyAlertIsDisplayed(){
		String description = "Alert is displayed";
		if(SeleniumUtils.alertIsPresent()){
			addStepToTest("pass", description, "AlertDisplayed");
		}else{
			addStepToTest("fail", description, "AlertDisplayed");
		}
	}
	
	public static void clickAcceptAlert() throws Exception{
		SeleniumUtils.acceptAlert();
		Thread.sleep(10);
	}
	
	public static String getFormattedDate(String date){
		LocalDate currentDate = LocalDate.parse(date);
		int dayOfMonth = currentDate.getDayOfMonth();
		String month = currentDate.getMonth().toString().substring(0,3);
		int year = currentDate.getYear();
		String formattedDate = dayOfMonth + " " + month + " " + year;
		System.out.println(formattedDate);
		return formattedDate;
	}

}
