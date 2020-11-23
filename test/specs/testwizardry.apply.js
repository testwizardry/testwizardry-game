describe("TestWizardry", function() {
    it("it should admit wizards to Hogwarts", function() {
        browser.url("/");
        $('#apply').click();

        $('#character_name').setValue('Harry Potter');
        $('#character_gender').selectByVisibleText('male');
        $('#character_age').setValue('11');
        $('#character_status_wizard').click();
        $('[value="Send Application"]').click();

        expect($('h2')).toHaveTextContaining("Congratulations");
    })
})