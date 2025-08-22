import urls from "../../paths.json";

let url = urls.amazonUrl;

describe("Amazon Egypt - Challenge 2", () => {
    const selectors = {
        searchField: ".nav-search-field",
        searchButton: "#nav-search-submit-button",
        sortDropdown: "#a-autoid-0-announce",
        sortHighToLow: "#s-result-sort-select_2",
        firstResult:
            "h2[aria-label='Apple iPad Pro 13-inch (M4): Ultra Retina XDR display, 1TB, Landscape 12MP Front Camera/12MP Back Camera, Wi-Fi 6E + 5G Cellular with eSIM, All-Day Battery Life, Standard glass - Space Black']",
        productTitle: "#productTitle",
        productPrice: '#corePriceDisplay_desktop_feature_div [aria-hidden="true"]',
        addToCart: '[name="submit.add-to-cart"]',
        declineWarranty: "input[aria-labelledby='attachSiNoCoverage-announce']",
        cartIcon: "#nav-cart-count-container",
        cartItemName: ".a-truncate-cut",
        cartItemPrice: ".a-text-bold > .a-price > [aria-hidden='true']",
    };

    beforeEach(() => {
        Cypress.on("uncaught:exception", () => false); // Ignore irrelevant JS errors
    });

    it("Search iPad, add to cart and verify", () => {
        cy.visit(url); // Open Amazon

        // Search for iPad
        cy.get(selectors.searchField).type("iPad");
        cy.get(selectors.searchButton).click();

        // Sort by Price: High to Low
        cy.get(selectors.sortDropdown).click();
        cy.get(selectors.sortHighToLow).click();

        // Open first search result
        cy.get(selectors.firstResult).first().click();

        // Verify product details are visible
        cy.get(selectors.productTitle).should("be.visible");
        cy.get(selectors.productPrice).should("be.visible");

        // Save product name and price
        cy.get(selectors.productTitle)
            .invoke("text")
            .then((productName) => {
                const name = productName.trim();

                cy.get(selectors.productPrice)
                    .invoke("text")
                    .then((productPrice) => {
                        const price = productPrice.trim();

                        // Add product to cart
                        // eslint-disable-next-line
                        cy.wait(3000);
                        cy.get(selectors.addToCart).click();
                        cy.get(selectors.declineWarranty).click();
                        cy.get(selectors.cartIcon).click();

                        // Verify product details in cart
                        cy.get(selectors.cartItemName)
                            .invoke("text")
                            .then((cartName) => {
                                const cartItem = cartName.trim();

                                cy.get(selectors.cartItemPrice)
                                    .invoke("text")
                                    .then((cartPrice) => {
                                        const cartAmount = cartPrice.trim();

                                        // Assertions
                                        expect(name).to.include(cartItem.slice(0, 50));
                                        expect(price).to.include(cartAmount.slice(0, 10));
                                    });
                            });
                    });
            });
    });
});
