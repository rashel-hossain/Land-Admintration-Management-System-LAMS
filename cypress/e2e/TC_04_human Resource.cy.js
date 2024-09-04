import { userData } from "../support/userConfigure.cy";

describe('Human Resource', () => {
    it('should log in successfully', () => {
        // Visit the website
        cy.visit('https://lams.dev.z8.softbd.xyz/');
        // Click the login/register button
        cy.get('#login-reg-button').click();
        // Interact with the "Office" button if needed
        cy.get('.MuiButton-outlinedPrimary .text-label')
            .contains('প্রশাসনিক')
            .click();
        // Input the username and password
        cy.get('#username').type(userData.userName);
        cy.get('#password').type(userData.password);
        // Submit the login form
        cy.get('#kc-login').click();
        // Click on lams app
        cy.get('img[alt="LAMS App"]').click();
    });
});