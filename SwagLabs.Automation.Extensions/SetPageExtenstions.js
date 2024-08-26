class SetPageExtenstions{
    
    constructor(page)
    {
        this.page = page;
    }
    
    async SetTextBoxValueByPlaceholder(placeholderName, inputValue)
    {
        await this.page.getByPlaceholder(placeholderName).fill(inputValue);
    }
}

module.exports = SetPageExtenstions;