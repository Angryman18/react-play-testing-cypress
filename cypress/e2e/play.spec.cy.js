describe("Play Route Tests", () => {
  beforeEach(() => {
    cy.visit("/plays");
  });

  it("Search Field Rendered", () => {
    cy.get(".search-input").should("exist");
  });

  it("Search Field is Working", () => {
    cy.get(".search-input").type("code{enter}").as("search-section");
    cy.get("[data-test=play]").should("be.visible").as("play");

    cy.get("@search-section")
      .clear()
      .type("{enter}")
      .then(() => {
        cy.get("@play").should("be.visible");
      });
  });
});
