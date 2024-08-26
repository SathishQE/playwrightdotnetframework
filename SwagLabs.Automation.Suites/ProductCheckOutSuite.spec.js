// @ts-check
const {test, expect } = require('@playwright/test');
const { fail } = require('assert');
const BooleanPageExtenstions = require ('../SwagLabs.Automation.Extensions/BooleanPageExtenstions');
const SetPageExtenstions = require('../SwagLabs.Automation.Extensions/SetPageExtenstions');
const ClickPageExtensions = require('../SwagLabs.Automation.Extensions/ClickPageExtensions');
const GetPageExtenstions = require('../SwagLabs.Automation.Extensions/GetPageExtenstions');

const LoginPageConstants = require('../SwagLabs.Automation.Constants/LoginPageConstants');
const HomePageConstants = require('../SwagLabs.Automation.Constants/HomePageConstants');

test.describe.configure({mode: "serial"});

  let page;

  let booleanPageExtenstion;
  let setPageExtenstion;
  let clickPageExtension;
  let getPageExtension;
  
test.describe('Product Checkout', ()=>{

  test.beforeAll(async({browser})=>{

    page = await browser.newPage();

    

    booleanPageExtenstion = new BooleanPageExtenstions(page);
    setPageExtenstion = new SetPageExtenstions(page);
    clickPageExtension = new ClickPageExtensions(page);
    getPageExtension = new GetPageExtenstions(page);

    //goto website
      await page.goto(LoginPageConstants.BaseUrl);

    //enter username, password
      await setPageExtenstion.SetTextBoxValueByPlaceholder(LoginPageConstants.UserNamePlaceholderText, process.env.emailid);
      await setPageExtenstion.SetTextBoxValueByPlaceholder(LoginPageConstants.PasswordPlaceholderText, process.env.password);
      console.log("pswd: "+ process.env.emailid);
      console.log("pswd: "+ process.env.password);
    
    //click on login button
      await clickPageExtension.ClickButtonByIdAsync(LoginPageConstants.LoginButtonId);
  
  });
  
  test('ProductCheckOut', async()=>{
    //verify home page url
    let homepageUrl = await page.url();
    console.log(homepageUrl)
    if(homepageUrl != HomePageConstants.HomePageUrl)
    {
      fail("Url Not Matched.");
    }

    //Add to cart : First product
    await clickPageExtension.ClickButtonByIdAsync(HomePageConstants.SauceLabBackPackButtonId);

    //Click on cart icon
    await clickPageExtension.ClickButtonByIdAsync(HomePageConstants.CartIconId);

    //Click on Check out button
    await clickPageExtension.ClickButtonByIdAsync(HomePageConstants.CheckoutButtonId);

    //Enter Information
    await setPageExtenstion.SetTextBoxValueByPlaceholder(HomePageConstants.FirstNameTextBoxPlaceholderText, 'John');
    await setPageExtenstion.SetTextBoxValueByPlaceholder(HomePageConstants.LastNameTextBoxPlaceholderText, 'Doe');
    await setPageExtenstion.SetTextBoxValueByPlaceholder(HomePageConstants.ZipCodeTextBoxPlaceholderText, '123456');

    //Click on continue button
    await clickPageExtension.ClickButtonByIdAsync(HomePageConstants.ContinueButtonId);

    //Get Payment Information
    var paymentNumber = await getPageExtension.GetInnerTextByLocator(HomePageConstants.PaymentInformationDataTest);
    console.log(paymentNumber);

    //Click on finish button
    await clickPageExtension.ClickButtonByIdAsync(HomePageConstants.FinishButtonId);

    //Click on Back home button
    await clickPageExtension.ClickButtonByIdAsync(HomePageConstants.BackHomeButtonId);
  });

  test('has title1', async()=>{
    console.log("Print 1");
  });

  test('has title2', async()=>{
    console.log("Print 2");
  });

  test('has title3', async()=>{
    console.log("Print 3");
  });

  test.afterAll('Verify Home Page Url', async () => {
    
    //close browser instance
      await page.close();
  
  });


});

  


