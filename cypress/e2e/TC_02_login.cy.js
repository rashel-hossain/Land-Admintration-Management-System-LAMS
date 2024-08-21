describe('User login', () => {
    it('should log in successfully', () => {
        // Visit the website
        cy.visit('https://lams.dev.z8.softbd.xyz/');

        // Click the login/register button
        cy.get('#login-reg-button').click();

        // Interact with the "Office" button if needed
        cy.xpath('//div[contains(@class, "MuiCard-root")]//p[text()="অফিস"]').click();

        // Input the username and password
        cy.get('#username').type('acland_balaganj');
        cy.get('#password').type('121212aA');

        // Submit the login form
        cy.get('#kc-login').click();

        // Click on lams app
        cy.get('img[alt="LAMS App"]').click();
    });
});