Feature: Create/Edit/Delete records in Cafe Townsend application 
	As a user I want to be able to create, edit or delete a record in Cafe Townsend application
	so that I can add new employees, edit their information or delete the employees from system

Background: 
	Given user navigates to "http://cafetownsend-angular-rails.herokuapp.com" url 
	And successfully logs in to application with username "Luke" and password "Skywalker" 
	
Scenario: Create Employee - View 
	Given user clicks "Create" button in Home 
	And [Employee] form is displayed 
	Then following elements are displayed and enabled in form 
		|element|xpath_locator|
		|First name|//span[text()='First name:']/following-sibling::input[1]|
		|Last name|//span[text()='Last name:']/following-sibling::input[1]|
		|Start date|//span[text()='Start date:']/following-sibling::input[1]|
		|Email|//span[text()='Email:']/following-sibling::input[1]|
		|Add|//button[text()='Add']|
		|Cancel|//a[text()='Cancel']|

Scenario Outline: Create Employee - Create 
	Given user clicks "Create" button in Home 
	And [Employee] form is displayed 
	When user enters following fields "<FirstName>","<LastName>","<StartDate>" and "<Email>" 
	And user clicks [Add] button
	Then user is redirected to [Home]
	And employee with name "<FirstName>" and "<LastName>" is diplayed as clickable link
	Examples: 
		|FirstName|LastName|StartDate|Email|
		|Brandon |Flowers|2018-10-03|brandon.flowers@thekillers.com|
		|John |Lennon|2018-11-08|john.lennon@thebeatles.com|
		
Scenario Outline: Edit Employee - Edit
	Given employee with name "<FirstName>" and "<LastName>" is selected
	When user clicks "Edit" button in Home 
	And [Employee] form is displayed 
	When user enters following fields "<FirstName>","<LastName>","<StartDate>" and "<Email>" 
	And user clicks [Edit] button
	Then user is redirected to [Home]
	And employee with name "<FirstName>" and "<LastName>" is diplayed as clickable link
	Examples: 
		|FirstName|LastName|StartDate|Email|
		|Brandon |Flowers|2018-10-03|brandon.r.flowers@thekillers.com|
		
Scenario Outline: Delete Employee - Delete
	Given employee with name "<FirstName>" and "<LastName>" is selected
	When user clicks "Delete" button in Home 
	Then Warning alert is displayed
	And user accepts warning
	And employee with name "<FirstName>" and "<LastName>" is not diplayed as clickable link
	Examples: 
		|FirstName|LastName|
		|Brandon |Flowers|
		|John |Lennon|
	