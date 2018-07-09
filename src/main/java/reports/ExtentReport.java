package reports;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.MediaEntityModelProvider;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;

import utilities.GeneralUtils;

public class ExtentReport {
	private static ExtentReports extent = null;
	private static ExtentTest test = null;

	public static void setUp() {
		//Create report
		ExtentHtmlReporter htmlReporter = new ExtentHtmlReporter(GeneralUtils.getResultsDirectory()+"/summary.html");
		extent = new ExtentReports();
		// Add Machine Info
		extent.setSystemInfo("OS", System.getProperty("os.name"));
		extent.setSystemInfo("Username", System.getProperty("user.name"));
		// Attach Reporter
		extent.attachReporter(htmlReporter);
	}

	public static void createTestScenario(String scenarioName) {
		test = extent.createTest(scenarioName);
	}

	public static void createTestScenario(String scenarioName, String description) {
		test = extent.createTest(scenarioName, description);
	}

	public static void addStepToTest(String status, String description, MediaEntityModelProvider mediaEntityModel) {
		switch (status.toLowerCase()) {
			case "pass":
				test.pass(description,mediaEntityModel);
				break;
			case "fail":
				test.fail(description,mediaEntityModel);
				break;
			case "error":
				test.error(description,mediaEntityModel);
				break;
			case "info":
				test.info(description,mediaEntityModel);
				break;
			case "debug":
				test.debug(description,mediaEntityModel);
				break;
			case "warning":
				test.warning(description,mediaEntityModel);
				break;
			default:
				break;
		}
	}
	
	public static void addStepToTest(String status, String description) {
		switch (status.toLowerCase()) {
			case "pass":
				test.pass(description);
				break;
			case "fail":
				test.fail(description);
				break;
			case "error":
				test.error(description);
				break;
			case "info":
				test.info(description);
				break;
			case "debug":
				test.debug(description);
				break;
			case "warning":
				test.warning(description);
				break;
			default:
				break;
		}
	}
	
	public static void flush(){
		extent.flush();
	}
}
