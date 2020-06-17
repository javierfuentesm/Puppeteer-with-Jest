describe('Google test',  ()=> {
    it('should open google page', async () =>{
        jest.setTimeout(15000)
        await page.goto('https://google.com')
        await page.waitFor(5000)

    });
});
