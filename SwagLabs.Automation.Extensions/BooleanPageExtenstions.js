class BooleanExtensions{

    constructor(page){
        this.page = page;
    }

    async isTextBoxVisible(textboxName){
        return await this.page.getByRole('placeholder', {name: textboxName}).isVisible();
    }

    async Print(){
        console.log("tested");
    }

    async isTextBoxEditable(){
        await this.page.getByRole('textbox').isEditable();
    }
}

module.exports = BooleanExtensions;