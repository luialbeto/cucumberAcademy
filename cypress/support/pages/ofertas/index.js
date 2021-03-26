/// <reference types="Cypress" />

import OfertaElements from './elements';
const ofertaElements = new OfertaElements();
const url = Cypress.config('baseUrl');

class OfertaPage {
  // Acessa o site
  acessarSite() {
    cy.visit('/');
  }

  // clicar no botão wrapper
  clicarWrapper() {
    cy.get(ofertaElements.wrapper()).click({ multiple: true });
  }

  // Clica no select
  clicarBotaoDropSelect() {
    cy.get(ofertaElements.botaoDropSelect()).click({ force: true });
  }

  clicarBotaoFullStack(opcoes) {
    cy.get(ofertaElements.botaoFullStack()).click().contains(opcoes); 
  }
}

export default OfertaPage;
