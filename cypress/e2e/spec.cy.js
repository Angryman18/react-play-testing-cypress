context("render content first", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("featured play rendered", () => {
    cy.get(".home-plays")
      .scrollIntoView()
      .within(() => {
        cy.get("ul").find("li").should("have.length", 4);
      });
  });

  it("tweets are rendered", () => {
    cy.get(".tweets-container")
      .scrollIntoView()
      .within(() => {
        cy.get("[id*=twitter-widget]").should("be.visible");
      });
  });

  it("contibuters images are rendered", () => {
    cy.get(".list-contributors")
      .scrollIntoView()
      .within(() => {
        cy.get(".contributor-thumb")
          .should("be.visible")
          .and("have.prop", "naturalWidth")
          .should("be.greaterThan", 0);
      });
  });
});
