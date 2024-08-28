describe('Check status and approve if pendingUser approved', () => {
    it('should check the status and approve if pendin', () => {
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
        cy.contains('div.HomePage-moduleItem p.MuiTypography-root', 'মানব সম্পদ').click();
        cy.contains('div.HomePage-moduleItem p.MuiTypography-root', 'ব্যবহারকারী').click();

        // // Locate the "Approve" button by matching either 'Approve' or 'অনুমোদন করুন' text
        cy.get('span.MuiChip-label').contains(/Approve|অনুমোদন করুন/).click({ force: true });
        // Force click to handle cases where the element might not be immediately visible
        cy.get('button.ConfirmDialog-btn_green').contains('Yes').click();

        // Check if the item has already been approved or marked as "অনুমোদিত"
        /* cy.get('td.MuiTableCell-root')
             .contains(/Approved|অনুমোদিত/)
             .then(($cell) => {
                 if ($cell.length === 0) {
                     // Log to check if the "Approve" button is found
                     cy.get('div.MuiChip-root')
                         .contains(/Approve|অনুমোদন করুন/)
                         .then(($button) => {
                             if ($button.length > 0) {
                                 // Click the button if found
                                 cy.wrap($button).click({ force: true });
                             } else {
                                 cy.log('Approve button not found');
                             }
                         });
 
                     // Log to check if the "Yes" button is found
                     cy.get('button.ConfirmDialog-btn_green')
                         .contains('Yes')
                         .then(($yesButton) => {
                             if ($yesButton.length > 0) {
                                 // Click the "Yes" button if found
                                 cy.wrap($yesButton).click();
                             } else {
                                 cy.log('Yes button not found');
                             }
                         });
                 } else {
                     cy.log('Item is already approved or marked as "অনুমোদিত".');
                 }
             });
             */
    });
});