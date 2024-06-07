Cypress.Commands.add('addProductToCart', (productId) => {
    cy.visit(`https://www.demoblaze.com/prod.html?idp_=${productId}`);
    cy.get('.btn-success').contains('Add to cart').click();
    cy.on('window:alert', (text) => {
        expect(text).to.contains('Product added');
    });
});

Cypress.Commands.add('verifyCartProductCount', (expectedCount) => {
    cy.visit('https://www.demoblaze.com/cart.html');
    cy.wait(2000); // Ensure the cart is fully loaded
    cy.get('tbody', { timeout: 10000 }).find('tr.success').should('have.length.greaterThan', expectedCount);
});

Cypress.Commands.add('placeOrder', (orderDetails) => {
    cy.visit('https://www.demoblaze.com/cart.html#');
    cy.wait(2000); // Ensure the cart is fully loaded
    cy.get('button[data-target="#orderModal"]').should('be.visible').contains('Place Order').click();
    cy.wait(1000); // Wait for the form to be visible

    cy.get('#name').type(orderDetails.name);
    cy.get('#country').type(orderDetails.country);
    cy.get('#city').type(orderDetails.city);
    cy.get('#card').type(orderDetails.card);
    cy.get('#month').type(orderDetails.month);
    cy.get('#year').type(orderDetails.year);

    cy.contains('Purchase').click();

    cy.get('.sweet-alert').should('be.visible');
    cy.get('.sweet-alert').contains('Thank you for your purchase!');
});
