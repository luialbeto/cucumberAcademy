/// <reference types="Cypress" />

import { Given, And, Then } from 'cypress-cucumber-preprocessor/steps';
import OfertaPage from '../../support/pages/ofertas';

const ofertaPage = new OfertaPage();

Given('que eu estou no site da gamaacademy', () => {
  ofertaPage.acessarSite('/');
  cy.wait(5000);
  ofertaPage
  .clicarWrapper({ multiple: true })
  cy.wait(200);
});

And('clico no botao devfullstack', () => {
  ofertaPage
  .clicarBotaoDropSelect()
  .cy.wait(200);
});

Then('devo ver as opcoes', () => {
  ofertaPage.clicarBotaoFullStack();
});
