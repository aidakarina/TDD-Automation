package utilities;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class DriverFactory {
	private static WebDriver driver;	
	private static WebDriverWait wait;
	
	public static void setUp(String browser){
		WebDriver driver = DriverFactory.start(browser);
		wait = new WebDriverWait(driver, 30);
	}
	
	public static WebDriver getDriver(){
		return driver;
	}
	
	public static WebDriverWait getDriverWait(){
		return wait;
	}

	public static WebDriver start(String browser) {

		// If driver null then create it, else ignore it
		if (driver == null) {
			switch (browser.toLowerCase()) {
			case "firefox":
				// Set the path of Firefox driver
				System.setProperty("webdriver.gecko.driver", "/Users/aidakarinacoronelcontreras/Documents/geckodriver");
				// Initialize driver
				driver = new FirefoxDriver();
				break;
			case "chrome":
				// Set the path of Chrome driver
				System.setProperty("webdriver.chrome.driver",
						"/Users/aidakarinacoronelcontreras/Documents/chromedriver");
				// Initialize driver
				driver = new ChromeDriver();
				break;
			default:
				break;
			}
			// Maximize browser
			driver.manage().window().maximize();
		}
		
		return driver;
	}

	public static void configure(WebDriver driver) {
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
	}
	
	public static void tearDown(){
		driver.close();
		driver.quit();
		driver = null;
	}
}
