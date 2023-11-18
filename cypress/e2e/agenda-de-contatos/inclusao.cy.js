/// <reference types="cypress" />

describe("testando a inclusão de um contato", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app");
  });
  it("deve adicionar um contato na agenda", () => {
    cy.get('input[placeholder="Nome"]').type("Hendrick");
    cy.get('input[placeholder="E-mail"]').type("hendrick@gmail.com");
    cy.get('input[placeholder="Telefone"]').type("71988557733");
    cy.get(".adicionar").click();
  });
});
