# E2E Tests

This repository contains E2E tests using Cypress for the web application [DemoBlaze](https://www.demoblaze.com).

## Prerequisites

1. Install [Node.js](https://nodejs.org/) and npm (Node Package Manager).

## Setup

1. Clone the repository:
   ```bash
   git clone <REPO-URL>
   cd <REPO-NAME>
   cd e2e-tests

2. Install Dependencies
   * npm install
   * npm install cypress --save-dev

# Runing Tests

Local Execution

1. npx cypress open
2. Start E2E testing in Chrome
3. Run tests (spec.cy.js)

# Test Description
## E2E Test: Add Products to Cart and Place Order
1. Add products to cart:
   * Navigate to the product page.
   * Add the product to the cart.
   * Verify that the confirmation message is displayed.
   * Verify products in cart:

2. Navigate to the cart page.
   * Verify that the added products are present.

3. Place order:
   * Fill in the order form.
   * Submit the order.
   * Verify the order confirmation message.
