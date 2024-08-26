# Requirement Specification for Playwright Test Framework

## Overview

This document outlines the requirements and guidelines for setting up a Playwright-based test automation framework using the Page Object Model (POM), constants, and Playwright extensions. The goal is to create a scalable, maintainable, and efficient test suite for our web applications.

## Project Structure

## Requirements

    1. Download and install stable Node.Js version: https://nodejs.org/en/download/package-manager
    2. Check the node version node --version after installation.
    3. Download and install visual studio code: https://code.visualstudio.com/
    4. Create a project folder in local computer.
    5. Have project folder and open it from VS Code. 
    6. Download Playwright for VsCode, dotenv from Extentsion with in VS Code.
    7. Run Test: install playwright.

allure Module => npm i -D @playwright/test allure-playwright
allure command line => npm install -g allure-commandline --save-dev
### Playwright Setup

1. **Playwright Installation**
   - Install Playwright and its dependencies.
   - Command: `Run Test: install playwright.`

2. **Playwright Configuration**
   - Define the Playwright configuration in `config/playwright.config.js`.
   - Include settings for browsers, timeouts, base URL, etc.

### Page Object Model (POM)

1. **Directory Structure**
   - Page objects and constants should be placed in the `/automation.playwright.pom` directory.
   - Each page objects and constants should represent a single page or a significant component of   the application.

2. **Extension Object Structure**
   - Each Extension file should export a class.
   - The class should include:
     - Sudo Code for the each functional elements.
     - Methods to interact with elements (e.g., `clickButton`, `fillInput`).
     - Helper methods for common actions.

   Example:
   ```javascript

    //automation.playwright.pom or automation.playwright.pom/pages
   class HomePagePom
   {
        constructor(page)
        {
        this.page = page
        }

        //Set First Name
        async SetUserNameTextBox(placeholderName, inputValue)
        {
        await this.page.SetTextBoxValueByPlaceholder(placeholderName,inputValue);
        }
    }

    module.exports = HomePagePom;
   

   Constants
    
    Definition

        Define constants in the `/automation.playwright.pom` file. Have separate folders for Pages and Constants in future if its required 
        Constants should include URLs, element selectors, and other static values used across tests

        //automation.playwright.pom or automation.playwright.pom/constants
        class LoginPageConstants
        {
            static BaseUrl = 'https://www.saucedemo.com/';
    
            static UserNamePlaceholderText = 'Username';
            static PasswordPlaceholderText = 'Password';

            static LoginButtonId = 'id=login-button';
        }

    Usage
        Import constants in test files and page objects as needed.

   Extensions

    Custom Extensions

        Custom extensions can be added to extend Playwright's functionality.
        Place custom extension files in the /extensions directory.

        //automation.playwright.extensions/
   
     class BooleanExtensions
        {

            constructor(page){
                this.page = page;
            }

            async isTextBoxVisible(textboxName){
                return await this.page.getByRole('placeholder', {name: textboxName}).isVisible();
            }

            async isTextBoxEditable(){
                await this.page.getByRole('textbox').isEditable();
            }
        }
        module.exports = BooleanExtensions;
    
    Integration
        
        Integrate custom extensions in your test or page object files as needed.

    Test Suite 
        Directory Structure

            Place test suite in the `/automation.playwright/testsuites` directory.
            Use a clear and consistent naming convention.
            
        Test Structure

            Import page objects and constants.
            Write tests using Playwright's test methods.
            Ensure tests are self-contained and maintainable.

                // tests/example.spec.js
                const { test, expect } = require('@playwright/test');
                const ExamplePage = require('../pages/example.page');
                const { BASE_URL } = require('../utils/constants');

                test('should click example button', async ({ page }) => {
                const examplePage = new ExamplePage(page);
                await page.goto(BASE_URL);
                await examplePage.clickExampleButton();
                // Add assertions as needed
                });

    Utilities
        
        Keep all configuration related files with in `automation.playwright.util`
        Having configuration files .config to work with multiple environments, or to keep any environment related configurations like azure keyvalult, licenses, agreement, encrypt and decrypt. 


    Best Practices
            Consistency
                Follow consistent naming conventions and code style.
            Maintainability
                Keep page objects focused and manageable.
                Regularly refactor constants and page objects as the application evolves.
            Documentation
                Document complex methods and functionality in the codebase.
            Performance
                Optimize selectors and interactions to improve test performance.

    Conclusion
        This document provides a foundational structure for setting up a Playwright test framework. Adhering to these guidelines will ensure a well-organized, maintainable, and scalable test suite.


