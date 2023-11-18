/// <reference types="cypress" />

describe("testando a remoção de um contato", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app");
  });
  it("deve remover um contato", () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .delete").click();
    cy.get(":nth-child(3) > .sc-gueYoa > .delete").click();
    cy.get(":nth-child(4) > .sc-gueYoa > .delete").click();
  });
});
