/// <reference types="Cypress" />

import OfertaElements from './elements';
const ofertaElements = new OfertaElements();
const url = Cypress.config("baseUrl");

  class OfertaPage {
  // Acessa o site
  acessarSite() {
    cy.visit(url);
  }

  // clicar no botão wrapper
  clicarWrapper() {
    cy.get(ofertaElements.wrapper()).click();
  }

  // Clica no select
  clicarBotaoDropSelect() {
    cy.get(ofertaElements.botaoDropSelect()).click({ force: true });
  }

  clicarBotaoFullStack() {
    cy.get(ofertaElements.botaoFullStack()).click();
  }
}

export default OfertaPage;
