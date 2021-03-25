/// <reference types="Cypress" />

import { Given, And, Then } from 'cypress-cucumber-preprocessor/steps';
import OfertaPage from '../../support/pages/ofertas';

const ofertaPage = new OfertaPage();

Given('que eu estou no site da gamaacademy', () => {
  ofertaPage.acessarSite();
  cy.wait(5000);
  ofertaPage.clicarWrapper();
});

And('clico no botao devfullstack', () => {
  ofertaPage.clicarBotaoDropSelect();
});

Then('devo ver as opcoes', () => {
  ofertaPage.clicarBotaoFullStack();
});

/* When("proposta válida", () => {
  cy.visit(
    "https://app.queroquitar.com.br/?doc=002.056.180-65&utm_source=Google_Ads&utm_medium=cpc&utm_campaign=gg_2020_geral&utm_content=&utm_term="
  );
  cy.get('[class="input form-control-lg mb-4 mt-2 align-items-center"]').type(
    "11999999999"
  );
  cy.contains("Entrar").click();
  cy.wait(5000);

  cy.visit("https://app.queroquitar.com.br/panel");
  cy.wait(7000);
  cy.contains("Quero essa oferta!").click();
  cy.wait(7000);
  cy.contains("Você pode escolher outra data de vencimento:");
  expect(true).to.be.true;
  cy.get(".container-buttons > .button").click();

  cy.wait(6000);
  cy.get('[title="Termos de uso"]').click({ force: true });
  cy.get(".backButton").click({ force: true });
  cy.get('[title="Política de Privacidade"]').click({ force: true });
  cy.get(".backButton").click({ force: true });
  cy.get('[type="checkbox"]').check({ force: true });
  cy.contains("Fechar acordo!").click();
  cy.contains("Sair").click({ force: true });
  ofertaPage.propostaValida();
}); */
