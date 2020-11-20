describe("TestWizardry", function() {
    it("it should admit wizards to Hogwarts", function() {
        browser.url("/");
        $('#apply').click();

        $('[name=player_name]').setValue('Harry Potter');
        $('[name=player_gender]').setValue('male');
        $('[name=player_age]').setValue('11');
        $('[value="Send Application"]').click();

        expect($('h2')).toHaveTextContaining("Congratulations");
    })
})