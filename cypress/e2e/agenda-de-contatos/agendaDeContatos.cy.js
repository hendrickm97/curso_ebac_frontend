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
  it("deve remover os contatos", () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .delete").click();
    cy.get(":nth-child(3) > .sc-gueYoa > .delete").click();
    cy.get(":nth-child(4) > .sc-gueYoa > .delete").click();
  });
});
