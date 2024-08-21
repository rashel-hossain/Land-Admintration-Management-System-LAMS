describe('user_registration', () => {
    it('passes', () => {
        const fnameBang = ['রাসেল']; const lnameBang = ['শাহরিয়ার'];
        const fnameEng = ['Rashel55']; const lnameEng = ['Shahriar'];

        // Visit website and hit the register pprocess button
        cy.visit('https://lams.dev.z8.softbd.xyz/');
        cy.get('.css-1yeg3l4').click();
        cy.get('[href="/registration"] > .MuiButtonBase-root').click();
        cy.get(':nth-child(2) > a > .MuiPaper-root').click();

        // Enter English first name and last name
        const randomFnameEng = fnameEng[Math.floor(Math.random() * fnameEng.length)];
        cy.get('#\\:r2\\:').should('be.visible').type(randomFnameEng);
        const randomLnameEng = lnameEng[Math.floor(Math.random() * lnameEng.length)];
        cy.get('#\\:r3\\:').type(randomLnameEng);
        // Enter Bangla with English first name and last name
        const randomFnameBang = fnameBang[Math.floor(Math.random() * fnameBang.length)];
        cy.get('#\\:r0\\:').type(randomFnameBang);
        const randomLnameBang = lnameBang[Math.floor(Math.random() * lnameBang.length)];
        cy.get('#\\:r1\\:').type(randomLnameBang);
        // Generate mobile number
        const prefix = '017';
        const mobileNumber = prefix + Math.floor(Math.random() * 100000000).toString().padStart(8, '0');
        cy.get('#\\:r4\\:').should('be.visible').type(mobileNumber);
        // Generate short username
        const username = fnameEng[Math.floor(Math.random() * fnameEng.length)].toLowerCase();
        cy.get('#\\:r5\\:').type(username);
        // Select Rank from the dropdown
        cy.get('input[placeholder="Select Rank"]').click();
        cy.get('ul[role="listbox"] li').contains('Surveyor').click();
        // Generate first name create Email
        const email = `${fnameEng[0].toLowerCase()}@gmail.com`
        cy.get('#\\:r6\\:').type(email);
        cy.get('#\\:r6\\:').should('have.value', email);
        // Generate random nid seeding
        const randomNidNumber = '10' + Math.floor(Math.random() * 90000000 + 10000000);
        cy.get('#\\:r7\\:').type(randomNidNumber);
        //date-month-year selecting
        cy.get('#\\:r8\\:').type('01/01/2000');
        cy.get('#\\:r8\\:').should('have.value', '01/01/2000');
        // Select Officer from the dropdown
        cy.get('#\\:ra\\:').click();
        cy.get('ul[role="listbox"] li').contains('Officer').click();
        cy.get('#\\:ra\\:').should('have.value', 'Officer');
        // Select Permanent from the dropdown
        cy.get('#\\:rc\\:').click();
        cy.get('ul[role="listbox"] li').contains('Permanent').click();
        cy.get('#\\:rc\\:').should('have.value', 'Permanent');
        // Select Grade from the dropdown
        cy.get('#\\:rs\\:').click();
        cy.get('ul[role="listbox"] li').contains('1st grade').click();
        cy.get('#\\:rs\\:').should('have.value', '1st grade');
        // Select office type from the dropdown
        cy.get('#\\:rq\\:').click();
        cy.get('ul[role="listbox"] li').contains('MINISTRY').click();
        cy.get('#\\:rq\\:').should('have.value', 'MINISTRY');
        // Select JOINING DATE 
        cy.get('#\\:rg\\:').type('01/01/2023');
        cy.get('#\\:rg\\:').should('have.value', '01/01/2023');
        // Select office type from the dropdown
        cy.get('#\\:r10\\:').click();
        cy.get('ul[role="listbox"] li').contains('Ministry of Finance').click();
        cy.get('#\\:r10\\:').should('have.value', 'Ministry of Finance');
        // Select current JOINING DATE 
        cy.get('#\\:ri\\:').type('01/01/2023');
        cy.get('#\\:ri\\:').should('have.value', '01/01/2023');
        // Generate password
        cy.get('#\\:rk\\:').type('121212aA')
        cy.get('#\\:rl\\:').type('121212aA')
        // Extract the CAPTCHA image to text
        cy.get('.MuiTypography-root[aria-readonly="true"]').invoke('text').then((captchaText) => {
            // Use the extracted CAPTCHA text in the input field
            cy.get('#\\:rn\\:').type(captchaText);
        });
        // Submit
        cy.contains('button', 'Create Account').click();
    })
})