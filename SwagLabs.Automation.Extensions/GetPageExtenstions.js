class GetPageExtensions{

    constructor(page){
        this.page = page
    }

    async GetInnerTextByLocator(locator){
        return await this.page.locator(locator).innerText();
    }

}

module.exports = GetPageExtensions;