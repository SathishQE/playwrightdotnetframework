class ClickPageExtension{
    constructor(page){
        this.page = page
    }

    async ClickButtonByIdAsync(buttonId){
        await this.page.locator(buttonId).click();
    }

    async ClickButtonByXptathAsync(buttonXpath){
        await this.page.locator(buttonXpath).click();
    }

    async ClickButtonByClassNameAsync(buttonClassName){
        await this.page.locator(buttonClassName).click();
    }

    async ClickButtonByNameAsync(buttonName){
        await this.page.getByRole('button', {name: buttonName}).click();
    }


}

module.exports = ClickPageExtension;