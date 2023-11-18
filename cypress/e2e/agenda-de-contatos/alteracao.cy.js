/// <reference types="cypress" />

describe("testando a alteração de um contato", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app");
  });
  it("deve alterar e salvar um contato existente(Bruna Costa)", () => {
    cy.get(":nth-child(3) > .sc-gueYoa > .edit").click();
    cy.get('input[placeholder="Nome"]').clear().type("Bruna");
    cy.get('input[placeholder="E-mail"]').clear().type("brunca.costa@ebac.com");
    cy.get('input[placeholder="Telefone"]').clear().type("15932635189");
    cy.get(".alterar").click();
  });
  it("testando a funcionalidade do botão cancelar alterações", () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();
    cy.get('input[placeholder="Telefone"]').clear().type("15932635189");
    cy.get(".cancelar").click();
  });
});
