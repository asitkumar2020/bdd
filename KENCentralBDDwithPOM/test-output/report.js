$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 24,
  "name": "Validate Login Page With Valid Credentials",
  "description": "",
  "id": "login-feature;validate-login-page-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Open Browser and navigate to Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Check the title of the Login Page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Enter UserId and Password and click on SignIn button",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Check the title of the Create Tenancy Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage_StepDefinition.open_Browser_and_navigate_to_Login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPage_StepDefinition.check_the_title_of_the_Login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPage_StepDefinition.enter_UserId_and_Password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPage_StepDefinition.check_the_title_of_the_Create_Tenancy_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 30,
  "name": "Validate the User Page",
  "description": "",
  "id": "login-feature;validate-the-user-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "Open Browser and go to the User Details page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Check the title of the User Page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Check whether all the options are displayed in the MoreAction dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Check whethet all the options are displayed in the DetailView dropdown",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});