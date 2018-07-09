$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createEditDeleteEmployee.feature");
formatter.feature({
  "line": 1,
  "name": "Create/Edit/Delete records in Cafe Townsend application",
  "description": "As a user I want to be able to create, edit or delete a record in Cafe Townsend application\nso that I can add new employees, edit their information or delete the employees from system",
  "id": "create/edit/delete-records-in-cafe-townsend-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4597319921,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user navigates to \"http://cafetownsend-angular-rails.herokuapp.com\" url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "successfully logs in to application with username \"Luke\" and password \"Skywalker\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://cafetownsend-angular-rails.herokuapp.com",
      "offset": 19
    }
  ],
  "location": "Steps.userNavigatesToUrl(String)"
});
formatter.result({
  "duration": 877949212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luke",
      "offset": 51
    },
    {
      "val": "Skywalker",
      "offset": 71
    }
  ],
  "location": "Steps.successfullyLogsInToApplicationWithUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 2202037676,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Create Employee - View",
  "description": "",
  "id": "create/edit/delete-records-in-cafe-townsend-application;create-employee---view",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "user clicks \"Create\" button in Home",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "[Employee] form is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "following elements are displayed and enabled in form",
  "rows": [
    {
      "cells": [
        "element",
        "xpath_locator"
      ],
      "line": 13
    },
    {
      "cells": [
        "First name",
        "//span[text()\u003d\u0027First name:\u0027]/following-sibling::input[1]"
      ],
      "line": 14
    },
    {
      "cells": [
        "Last name",
        "//span[text()\u003d\u0027Last name:\u0027]/following-sibling::input[1]"
      ],
      "line": 15
    },
    {
      "cells": [
        "Start date",
        "//span[text()\u003d\u0027Start date:\u0027]/following-sibling::input[1]"
      ],
      "line": 16
    },
    {
      "cells": [
        "Email",
        "//span[text()\u003d\u0027Email:\u0027]/following-sibling::input[1]"
      ],
      "line": 17
    },
    {
      "cells": [
        "Add",
        "//button[text()\u003d\u0027Add\u0027]"
      ],
      "line": 18
    },
    {
      "cells": [
        "Cancel",
        "//a[text()\u003d\u0027Cancel\u0027]"
      ],
      "line": 19
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Create",
      "offset": 13
    }
  ],
  "location": "Steps.userClicksButtonInHome(String)"
});
formatter.result({
  "duration": 147806418,
  "status": "passed"
});
formatter.match({
  "location": "Steps.employeeFormIsDisplayed()"
});
formatter.result({
  "duration": 597666957,
  "status": "passed"
});
formatter.match({
  "location": "Steps.followingElementsAreDisplayedAndEnabledInForm(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 857881536,
  "status": "passed"
});
formatter.after({
  "duration": 220002768,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Create Employee - Create",
  "description": "",
  "id": "create/edit/delete-records-in-cafe-townsend-application;create-employee---create",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "user clicks \"Create\" button in Home",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "[Employee] form is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user enters following fields \"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cStartDate\u003e\" and \"\u003cEmail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user clicks [Add] button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user is redirected to [Home]",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "employee with name \"\u003cFirstName\u003e\" and \"\u003cLastName\u003e\" is diplayed as clickable link",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "create/edit/delete-records-in-cafe-townsend-application;create-employee---create;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "StartDate",
        "Email"
      ],
      "line": 29,
      "id": "create/edit/delete-records-in-cafe-townsend-application;create-employee---create;;1"
    },
    {
      "cells": [
        "Brandon",
        "Flowers",
        "2018-10-03",
        "brandon.flowers@thekillers.com"
      ],
      "line": 30,
      "id": "create/edit/delete-records-in-cafe-townsend-application;create-employee---create;;2"
    },
    {
      "cells": [
        "John",
        "Lennon",
        "2018-11-08",
        "john.lennon@thebeatles.com"
      ],
      "line": 31,
      "id": "create/edit/delete-records-in-cafe-townsend-application;create-employee---create;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1728666741,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user navigates to \"http://cafetownsend-angular-rails.herokuapp.com\" url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "successfully logs in to application with username \"Luke\" and password \"Skywalker\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://cafetownsend-angular-rails.herokuapp.com",
      "offset": 19
    }
  ],
  "location": "Steps.userNavigatesToUrl(String)"
});
formatter.result({
  "duration": 553104466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luke",
      "offset": 51
    },
    {
      "val": "Skywalker",
      "offset": 71
    }
  ],
  "location": "Steps.successfullyLogsInToApplicationWithUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 1665271071,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Create Employee - Create",
  "description": "",
  "id": "create/edit/delete-records-in-cafe-townsend-application;create-employee---create;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "user clicks \"Create\" button in Home",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "[Employee] form is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user enters following fields \"Brandon\",\"Flowers\",\"2018-10-03\" and \"brandon.flowers@thekillers.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user clicks [Add] button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user is redirected to [Home]",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "employee with name \"Brandon\" and \"Flowers\" is diplayed as clickable link",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Create",
      "offset": 13
    }
  ],
  "location": "Steps.userClicksButtonInHome(String)"
});
formatter.result({
  "duration": 164225559,
  "status": "passed"
});
formatter.match({
  "location": "Steps.employeeFormIsDisplayed()"
});
formatter.result({
  "duration": 419080504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brandon",
      "offset": 30
    },
    {
      "val": "Flowers",
      "offset": 40
    },
    {
      "val": "2018-10-03",
      "offset": 50
    },
    {
      "val": "brandon.flowers@thekillers.com",
      "offset": 67
    }
  ],
  "location": "Steps.userEntersFollowingFieldsAnd(String,String,String,String)"
});
formatter.result({
  "duration": 984336118,
  "status": "passed"
});
formatter.match({
  "location": "Steps.userClicksAddButton()"
});
formatter.result({
  "duration": 96518690,
  "status": "passed"
});
formatter.match({
  "location": "Steps.userIsRedirectedToHome()"
});
formatter.result({
  "duration": 877681641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brandon",
      "offset": 20
    },
    {
      "val": "Flowers",
      "offset": 34
    }
  ],
  "location": "Steps.employeeWithNameAndIsDiplayedAsClickableLink(String,String)"
});
formatter.result({
  "duration": 372011552,
  "status": "passed"
});
formatter.after({
  "duration": 159917266,
  "status": "passed"
});
formatter.before({
  "duration": 1278846495,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user navigates to \"http://cafetownsend-angular-rails.herokuapp.com\" url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "successfully logs in to application with username \"Luke\" and password \"Skywalker\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://cafetownsend-angular-rails.herokuapp.com",
      "offset": 19
    }
  ],
  "location": "Steps.userNavigatesToUrl(String)"
});
formatter.result({
  "duration": 542099226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luke",
      "offset": 51
    },
    {
      "val": "Skywalker",
      "offset": 71
    }
  ],
  "location": "Steps.successfullyLogsInToApplicationWithUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 1756174865,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Create Employee - Create",
  "description": "",
  "id": "create/edit/delete-records-in-cafe-townsend-application;create-employee---create;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "user clicks \"Create\" button in Home",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "[Employee] form is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user enters following fields \"John\",\"Lennon\",\"2018-11-08\" and \"john.lennon@thebeatles.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user clicks [Add] button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user is redirected to [Home]",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "employee with name \"John\" and \"Lennon\" is diplayed as clickable link",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Create",
      "offset": 13
    }
  ],
  "location": "Steps.userClicksButtonInHome(String)"
});
formatter.result({
  "duration": 205591352,
  "status": "passed"
});
formatter.match({
  "location": "Steps.employeeFormIsDisplayed()"
});
formatter.result({
  "duration": 410883523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 30
    },
    {
      "val": "Lennon",
      "offset": 37
    },
    {
      "val": "2018-11-08",
      "offset": 46
    },
    {
      "val": "john.lennon@thebeatles.com",
      "offset": 63
    }
  ],
  "location": "Steps.userEntersFollowingFieldsAnd(String,String,String,String)"
});
formatter.result({
  "duration": 947719279,
  "status": "passed"
});
formatter.match({
  "location": "Steps.userClicksAddButton()"
});
formatter.result({
  "duration": 100011183,
  "status": "passed"
});
formatter.match({
  "location": "Steps.userIsRedirectedToHome()"
});
formatter.result({
  "duration": 840723628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 20
    },
    {
      "val": "Lennon",
      "offset": 31
    }
  ],
  "location": "Steps.employeeWithNameAndIsDiplayedAsClickableLink(String,String)"
});
formatter.result({
  "duration": 378701056,
  "status": "passed"
});
formatter.after({
  "duration": 158647453,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Edit Employee - Edit",
  "description": "",
  "id": "create/edit/delete-records-in-cafe-townsend-application;edit-employee---edit",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "employee with name \"\u003cFirstName\u003e\" and \"\u003cLastName\u003e\" is selected",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "user clicks \"Edit\" button in Home",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "[Employee] form is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user enters following fields \"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cStartDate\u003e\" and \"\u003cEmail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "user clicks [Edit] button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user is redirected to [Home]",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "employee with name \"\u003cFirstName\u003e\" and \"\u003cLastName\u003e\" is diplayed as clickable link",
  "keyword": "And "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "create/edit/delete-records-in-cafe-townsend-application;edit-employee---edit;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "StartDate",
        "Email"
      ],
      "line": 42,
      "id": "create/edit/delete-records-in-cafe-townsend-application;edit-employee---edit;;1"
    },
    {
      "cells": [
        "Brandon",
        "Flowers",
        "2018-10-03",
        "brandon.r.flowers@thekillers.com"
      ],
      "line": 43,
      "id": "create/edit/delete-records-in-cafe-townsend-application;edit-employee---edit;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1252946150,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user navigates to \"http://cafetownsend-angular-rails.herokuapp.com\" url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "successfully logs in to application with username \"Luke\" and password \"Skywalker\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://cafetownsend-angular-rails.herokuapp.com",
      "offset": 19
    }
  ],
  "location": "Steps.userNavigatesToUrl(String)"
});
formatter.result({
  "duration": 540647753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luke",
      "offset": 51
    },
    {
      "val": "Skywalker",
      "offset": 71
    }
  ],
  "location": "Steps.successfullyLogsInToApplicationWithUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 1531205669,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Edit Employee - Edit",
  "description": "",
  "id": "create/edit/delete-records-in-cafe-townsend-application;edit-employee---edit;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "employee with name \"Brandon\" and \"Flowers\" is selected",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "user clicks \"Edit\" button in Home",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "[Employee] form is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user enters following fields \"Brandon\",\"Flowers\",\"2018-10-03\" and \"brandon.r.flowers@thekillers.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "user clicks [Edit] button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user is redirected to [Home]",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "employee with name \"Brandon\" and \"Flowers\" is diplayed as clickable link",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Brandon",
      "offset": 20
    },
    {
      "val": "Flowers",
      "offset": 34
    }
  ],
  "location": "Steps.employeeWithNameAndIsSelected(String,String)"
});
formatter.result({
  "duration": 434459559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edit",
      "offset": 13
    }
  ],
  "location": "Steps.userClicksButtonInHome(String)"
});
formatter.result({
  "duration": 109959760,
  "status": "passed"
});
formatter.match({
  "location": "Steps.employeeFormIsDisplayed()"
});
formatter.result({
  "duration": 875935836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brandon",
      "offset": 30
    },
    {
      "val": "Flowers",
      "offset": 40
    },
    {
      "val": "2018-10-03",
      "offset": 50
    },
    {
      "val": "brandon.r.flowers@thekillers.com",
      "offset": 67
    }
  ],
  "location": "Steps.userEntersFollowingFieldsAnd(String,String,String,String)"
});
formatter.result({
  "duration": 938850830,
  "status": "passed"
});
formatter.match({
  "location": "Steps.userClicksEditButton()"
});
formatter.result({
  "duration": 90640490,
  "status": "passed"
});
formatter.match({
  "location": "Steps.userIsRedirectedToHome()"
});
formatter.result({
  "duration": 846203198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brandon",
      "offset": 20
    },
    {
      "val": "Flowers",
      "offset": 34
    }
  ],
  "location": "Steps.employeeWithNameAndIsDiplayedAsClickableLink(String,String)"
});
formatter.result({
  "duration": 380168660,
  "status": "passed"
});
formatter.after({
  "duration": 222361426,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 45,
  "name": "Delete Employee - Delete",
  "description": "",
  "id": "create/edit/delete-records-in-cafe-townsend-application;delete-employee---delete",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "employee with name \"\u003cFirstName\u003e\" and \"\u003cLastName\u003e\" is selected",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "user clicks \"Delete\" button in Home",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "Warning alert is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "user accepts warning",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "employee with name \"\u003cFirstName\u003e\" and \"\u003cLastName\u003e\" is not diplayed as clickable link",
  "keyword": "And "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "create/edit/delete-records-in-cafe-townsend-application;delete-employee---delete;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName"
      ],
      "line": 52,
      "id": "create/edit/delete-records-in-cafe-townsend-application;delete-employee---delete;;1"
    },
    {
      "cells": [
        "Brandon",
        "Flowers"
      ],
      "line": 53,
      "id": "create/edit/delete-records-in-cafe-townsend-application;delete-employee---delete;;2"
    },
    {
      "cells": [
        "John",
        "Lennon"
      ],
      "line": 54,
      "id": "create/edit/delete-records-in-cafe-townsend-application;delete-employee---delete;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1285972080,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user navigates to \"http://cafetownsend-angular-rails.herokuapp.com\" url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "successfully logs in to application with username \"Luke\" and password \"Skywalker\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://cafetownsend-angular-rails.herokuapp.com",
      "offset": 19
    }
  ],
  "location": "Steps.userNavigatesToUrl(String)"
});
formatter.result({
  "duration": 481921995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luke",
      "offset": 51
    },
    {
      "val": "Skywalker",
      "offset": 71
    }
  ],
  "location": "Steps.successfullyLogsInToApplicationWithUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 1567442447,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Delete Employee - Delete",
  "description": "",
  "id": "create/edit/delete-records-in-cafe-townsend-application;delete-employee---delete;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "employee with name \"Brandon\" and \"Flowers\" is selected",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "user clicks \"Delete\" button in Home",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "Warning alert is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "user accepts warning",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "employee with name \"Brandon\" and \"Flowers\" is not diplayed as clickable link",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Brandon",
      "offset": 20
    },
    {
      "val": "Flowers",
      "offset": 34
    }
  ],
  "location": "Steps.employeeWithNameAndIsSelected(String,String)"
});
formatter.result({
  "duration": 484708151,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delete",
      "offset": 13
    }
  ],
  "location": "Steps.userClicksButtonInHome(String)"
});
formatter.result({
  "duration": 204333989,
  "status": "passed"
});
formatter.match({
  "location": "Steps.warningAlertIsDisplayed()"
});
formatter.result({
  "duration": 43817377,
  "status": "passed"
});
formatter.match({
  "location": "Steps.userAcceptsWarning()"
});
formatter.result({
  "duration": 27604778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brandon",
      "offset": 20
    },
    {
      "val": "Flowers",
      "offset": 34
    }
  ],
  "location": "Steps.employeeWithNameAndIsNotDiplayedAsClickableLink(String,String)"
});
formatter.result({
  "duration": 87786250971,
  "status": "passed"
});
formatter.after({
  "duration": 190392422,
  "status": "passed"
});
formatter.before({
  "duration": 1410055515,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user navigates to \"http://cafetownsend-angular-rails.herokuapp.com\" url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "successfully logs in to application with username \"Luke\" and password \"Skywalker\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://cafetownsend-angular-rails.herokuapp.com",
      "offset": 19
    }
  ],
  "location": "Steps.userNavigatesToUrl(String)"
});
formatter.result({
  "duration": 523449685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luke",
      "offset": 51
    },
    {
      "val": "Skywalker",
      "offset": 71
    }
  ],
  "location": "Steps.successfullyLogsInToApplicationWithUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 1632333142,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Delete Employee - Delete",
  "description": "",
  "id": "create/edit/delete-records-in-cafe-townsend-application;delete-employee---delete;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "employee with name \"John\" and \"Lennon\" is selected",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "user clicks \"Delete\" button in Home",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "Warning alert is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "user accepts warning",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "employee with name \"John\" and \"Lennon\" is not diplayed as clickable link",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 20
    },
    {
      "val": "Lennon",
      "offset": 31
    }
  ],
  "location": "Steps.employeeWithNameAndIsSelected(String,String)"
});
formatter.result({
  "duration": 502805788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delete",
      "offset": 13
    }
  ],
  "location": "Steps.userClicksButtonInHome(String)"
});
formatter.result({
  "duration": 144025717,
  "status": "passed"
});
formatter.match({
  "location": "Steps.warningAlertIsDisplayed()"
});
formatter.result({
  "duration": 9797925,
  "status": "passed"
});
formatter.match({
  "location": "Steps.userAcceptsWarning()"
});
formatter.result({
  "duration": 41080974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 20
    },
    {
      "val": "Lennon",
      "offset": 31
    }
  ],
  "location": "Steps.employeeWithNameAndIsNotDiplayedAsClickableLink(String,String)"
});
formatter.result({
  "duration": 13662121949,
  "status": "passed"
});
formatter.after({
  "duration": 159646098,
  "status": "passed"
});
});