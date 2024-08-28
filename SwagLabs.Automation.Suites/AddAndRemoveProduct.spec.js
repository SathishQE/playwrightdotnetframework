// @ts-check
const {test, expect } = require('@playwright/test');
const { fail } = require('assert');
const BooleanPageExtenstions = require ('../SwagLabs.Automation.Extensions/BooleanPageExtenstions');
const SetPageExtenstions = require('../SwagLabs.Automation.Extensions/SetPageExtenstions');
const ClickPageExtensions = require('../SwagLabs.Automation.Extensions/ClickPageExtensions');
const GetPageExtenstions = require('../SwagLabs.Automation.Extensions/GetPageExtenstions');

const LoginPageConstants = require('../SwagLabs.Automation.Constants/LoginPageConstants');

let page;
let setPageExtenstion;
let clickPageExtension;

test.describe.configure({mode: "serial"});

test.describe('Add and Remove Product from Cart', async()=>{

    test.beforeAll(async({browser})=>{
        page = await browser.newPage();

        setPageExtenstion = new SetPageExtenstions(page);
        clickPageExtension = new ClickPageExtensions(page);
        
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
    
    test('Print 1', async()=>{
        console.log("Print 1");
    });

    test('Print 2', async()=>{
        console.log("Print 2");
    });

    test('Print 3', async()=>{
        console.log("Print 3");
    });

    test.afterAll(async({browser})=>{
        await browser.close();
    });





});