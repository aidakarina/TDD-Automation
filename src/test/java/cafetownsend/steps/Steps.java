package cafetownsend.steps;

import java.util.List;
import java.util.Map;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.AddEmployee;
import pages.EditEmployee;
import pages.Home;
import pages.Login;
import reports.ExtentReport;
import utilities.DriverFactory;
import utilities.GeneralUtils;
import utilities.SeleniumUtils;

public class Steps {

	@Before
	public void beforeScenario(Scenario scenario) {
		ExtentReport.createTestScenario(scenario.getName());
		DriverFactory.setUp("chrome");
	}

	@After
	public void afterScenario() {
		DriverFactory.tearDown();
	}

	@Given("^user navigates to \"([^\"]*)\" url$")
	public void userNavigatesToUrl(String url) {
		SeleniumUtils.navigateTo(url);
	}

	@Given("^user navigates to \"([^\"]*)\"$")
	public void userNavigatesTo(String url) {
		SeleniumUtils.navigateTo(url);
	}

	@Given("^successfully logs in to application with username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void successfullyLogsInToApplicationWithUsernameAndPassword(String username, String password) {
		Login.loginToCafeTownsend(username, password);
		Home.verifyLogoutIsDisplayed();
	}
	
	@Given("^user clicks \"([^\"]*)\" button in Home$")
	public void userClicksButtonInHome(String buttonName) {
	    Home.ClickElement(buttonName);
	}

	@Given("^\\[Employee\\] form is displayed$")
	public void employeeFormIsDisplayed() throws Throwable {
		GeneralUtils.verifyEmployeeFormIsDisplayed();
	}

	@Then("^following elements are displayed and enabled in form$")
	public void followingElementsAreDisplayedAndEnabledInForm(List<Map<String,String>> elements) {
		GeneralUtils.verifyElementsAreDisplayedAndEnabled(elements);
	}
	
	@When("^user enters following fields \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\"$")
	public void userEntersFollowingFieldsAnd(String firstName, String lastName, String startDate, String email) {
	    AddEmployee.enterFirstName(firstName);
	    AddEmployee.enterLastName(lastName);
	    AddEmployee.enterStartDate(startDate);
	    AddEmployee.enterEmail(email);
	    GeneralUtils.addStepToTest("info", "Enter fields in Employee Form","EnterFieldsInForm");
	}

	@When("^user clicks \\[Add\\] button$")
	public void userClicksAddButton() {
	    AddEmployee.clickAdd();
	}

	@Then("^user is redirected to \\[Home\\]$")
	public void userIsRedirectedToHome() {
	    Home.verifyHomeIsDisplayed();
	}

	@Then("^employee with name \"([^\"]*)\" and \"([^\"]*)\" is diplayed as clickable link$")
	public void employeeWithNameAndIsDiplayedAsClickableLink(String firstName, String lastName) {
		String employeeName = firstName + " " + lastName;
	    Home.verifyEmployeeIsDisplayedAsClickableLink(employeeName);
	}
	
	@Given("^employee with name \"([^\"]*)\" and \"([^\"]*)\" is selected$")
	public void employeeWithNameAndIsSelected(String firstName, String lastName){
		String employeeName = firstName + " " + lastName;
		Home.selectEmployee(employeeName);
	}

	@When("^user clicks \\[Edit\\] button$")
	public void userClicksEditButton(){
	    EditEmployee.clickUpdate();
	}
	
	@Then("^Warning alert is displayed$")
	public void warningAlertIsDisplayed(){
	    GeneralUtils.verifyAlertIsDisplayed();
	}

	@Then("^user accepts warning$")
	public void userAcceptsWarning() throws Exception {
	    GeneralUtils.clickAcceptAlert();
	}

	@Then("^employee with name \"([^\"]*)\" and \"([^\"]*)\" is not diplayed as clickable link$")
	public void employeeWithNameAndIsNotDiplayedAsClickableLink(String firstName, String lastName) {
		String employeeName = firstName + " " + lastName;
	    Home.verifyEmployeeIsNotDisplayed(employeeName);
	}
}
