package net.azurewebsites.StepDefinitions_Package;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;
import net.azurewebsites.Pages_Package.Home_Page;
import net.azurewebsites.Pages_Package.Login_Page;
import net.azurewebsites.TestBase_Package.TestBase;

public class LoginPage_StepDefinition extends TestBase {
	
	Login_Page loginDriver;
	Home_Page homeDriver;

	@Given("^Open Browser and navigate to Login page$")
	public void open_Browser_and_navigate_to_Login_page()  {
	    
	    TestBase.initialization();
	}

	@Given("^Check the title of the Login Page$")
	public void check_the_title_of_the_Login_Page() throws InterruptedException {
		Thread.sleep(5000);
		loginDriver = new Login_Page();
	String actualTitle = loginDriver.validateLoginPageTitle();
	Assert.assertEquals("Login", actualTitle);
	    
	}

	@Then("^Enter UserId and Password and click on SignIn button$")
	public void enter_UserId_and_Password()  {
	homeDriver = loginDriver.login(prop.getProperty("userId"), prop.getProperty("password"));
	    
	}

	/*@Then("^Click on the SignIn button$")
	public void click_on_the_SignIn_button()  {
		
	    
	}*/

	@Then("^Check the title of the Create Tenancy Page$")
	public void check_the_title_of_the_Create_Tenancy_Page()  {
		
	    
	}
	
	
}
