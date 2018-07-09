package execute;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import reports.ExtentReport;
import utilities.GeneralUtils;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = { "pretty", "html:target/report/report.html", "json:target/report/cucu_json_report.json",
		"junit:target/report/cucumber_junit_report.xml" }, 
		features = "src/test/resources/cafetownsend/test/",
		glue = "cafetownsend.steps", 
		snippets = SnippetType.CAMELCASE, 
		//dryRun = true, 
		monochrome = true)

public class Executor {
	
	@BeforeClass
	public static void beforeClass(){
		//Cleanup results directory
		GeneralUtils.deleteCreateDirectory(GeneralUtils.getResultsDirectory());
		//Setup Extent Reports
		ExtentReport.setUp();
	}
	
	@AfterClass
	public static void afterClass(){
		ExtentReport.flush();
	}
	
}
