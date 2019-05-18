package net.azurewebsites.Pages_Package;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import net.azurewebsites.TestBase_Package.TestBase;

public class Login_Page extends TestBase {

	@FindBy(id="signInName")
	WebElement userName;
	
	@FindBy(id="password")
	WebElement password;
	
	@FindBy(id="next")
	WebElement signIn;
	
	public Login_Page() {
		PageFactory.initElements(driver, this);
	}
	
	public String validateLoginPageTitle() {
		return driver.getTitle();
		
	}
	
	
	
	public Home_Page login(String us, String psd) {
		userName.sendKeys(us);
		password.sendKeys(psd); 
				
		signIn.click();
		
		return new Home_Page();
	}
	
}
