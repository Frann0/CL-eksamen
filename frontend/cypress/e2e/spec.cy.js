describe("Succesfully loads frontend", () => {
  it("passes", () => {
    cy.visit("localhost:5174");
  });
});

describe("API Call Test", function () {
  it("successfully retrieves data from the API", function () {
    cy.request("http://localhost:3000/products").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.a("array");
    });
  });
});

describe("Shop Page Product List Test", function () {
  it("checks if product list contains multiple products", function () {
    cy.visit("http://localhost:5174/shop"); // visit the shop page

    cy.get(".product_list") // get the product list div
      .find(".product") // find divs with class 'product' within the product list
      .its("length") // get the length of the found elements
      .should("be.gt", 1); // assert that the length is greater than 1
  });
});
