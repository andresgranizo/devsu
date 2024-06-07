# Devsu Test

[![CI](https://github.com/andresgranizo/devsu/actions/workflows/ci.yml/badge.svg)](https://github.com/andresgranizo/devsu/actions/workflows/ci.yml)

This repository contains automated testing projects for Devsu. The projects are divided into two main folders: `apiTest` and `teste2e`.

## Contents

- [apiTest](#apiTest)
- [teste2e](#teste2e)

## apiTest

The `apiTest` folder contains automated tests for the PetStore API. These tests verify various API functionalities such as adding a pet, finding a pet by ID, updating a pet, and finding a pet by status.

### Instructions

1. Clone the repository:
    ```sh
    git clone https://github.com/andresgranizo/devsu.git
    cd devsu/apiTest
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Run the tests:
    ```sh
    npx cypress open
    ```

## teste2e

The `teste2e` folder contains end-to-end (E2E) automated tests for the Demoblaze website. These tests cover user flows such as adding products to the cart, verifying the cart, and placing an order.

### Instructions

1. Clone the repository:
    ```sh
    git clone https://github.com/andresgranizo/devsu.git
    cd devsu/teste2e
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Run the tests:
    ```sh
    npx cypress open
    ```

For more details on how to run the tests and the covered test cases, refer to the `README.md` file inside the `teste2e` folder.

### Contact
If you have any questions or need more information, feel free to contact me through my [GitHub profile](https://github.com/andresgranizo).
