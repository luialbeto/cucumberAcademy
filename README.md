# cucumberAcademy

Projeto criado para apresentação em aula Gama Academy

## Documentação Cypress, Cucumber e fóruns

- www.cypress.io

- www.cucumber.io

- https://github.com/samlucax/calculator-cucumber-cypress

- http://shipit.resultadosdigitais.com.br/blog/estruturando-seu-projeto-com-bdd-e-cucumber/

- https://www.youtube.com/watch?v=iJgzwu9Haw4&t=1839s (Há diversos vídeos do Samuel Lucas, Semana Agilizei e Bootcamp)

- https://github.com/TheBrainFamily/cypress-cucumber-preprocessor/issues/482

- https://github.com/uLucasFraga/cy_cucumber_for_studies

# Passo-a-passo para instalar o cypress e cucumber do zero até a criação de features e steps

## Setup
    - npm install cypress
    - npx cypress open
    - após npx, Cypress apresenta exemplos dentro da pasta integration que podem facilitar os testes
    - Plugin - cypress-cucumber-preprocessor: npm install --save-dev cypress-cucumber-preprocessor
    - Config do plugin (colar o código abaixo no arquivo index da pasta plugins:

    const cucumber = require('cypress-cucumber-preprocessor').default
    module.exports = (on, config) => {
    on('file:preprocessor', cucumber())
    }

    - Alterar o código do arquivo cypress.json para: {"testFiles": "**/*.feature"}
    - Incluir no package.json o código abaixo, usando assim o plugin mais recente:

    "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true
    },

## Criando a feature (dentro da pasta integration)
    - feature de exemplo em inglês para conseguir usar a extensão CUKE (motivo: verificar como transformar as features em steps) - academy.feature:
    - 
    Feature: academy

    Feature Description: Consulta site GamaAcademy

    Como usuário, desejo ver opções de ofertas no site da Gama Academy

    Scenario: Entrar no site da gamaacademy e buscar opções

    Given que eu estou no site da gamaacademy

    And clico no botao devfullstack

    Then devo ver as <opcoes>

    | Crie seu portfólio!                   |

    | Acompanhamento de Carreira            |

    | Professores de surf que sabem surfar! |

    | Estude na Melhor Startup de Educação  |

## Steps
    - Criar dentro da pasta integration, uma pasta com o mesmo nome da feature: academy
    - Criar um arquivo steps.js dentro da pasta academy
    - Base URL - fixa na aplicação a URL desejada para os steps. Deve-se incluir no arquivo cypress.json, o código abaixo:

        "baseUrl":"[https://www.gama.academy/](https://www.gama.academy/)"

## Page Object
    - Definir o teste em 3 camadas: página, ação e elemento
    - Criar na pasta support, uma pasta chamada pages
    - Criar na pasta pages, uma pasta chamada ofertas
    - Criar na pasta ofertas, um arquivo chamado index.js (ações) e um arquivo chamado elements.js (elementos que executarão as ações)
    - index.js →adicionar o código abaixo para as ações:

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

    cy.get(ofertaElements.botaoFullStack()).click().cy.get(opcoes);

    }

    }

    export default OfertaPage;

    - [x]  elements.js → adicionar o código abaixo para os elementos:

    class OfertaElements {

    wrapper = () => {

    return 'button[class="ub-emb-close"]';

    };

    botaoDropSelect = () => {

    return '[class="icon-2 w-icon-dropdown-toggle"]';

    };

    botaoFullStack = () => {

    return '[href="/gama-experience/desenvolvimento-full-stack"]';

    };

    }

    export default OfertaElements;

## steps:

/// <reference types="Cypress" />

import { Given, And, Then } from 'cypress-cucumber-preprocessor/steps';

import OfertaPage from '../../support/pages/ofertas';

const ofertaPage = new OfertaPage();

Given('que eu estou no site da gamaacademy', () => {

ofertaPage.acessarSite('/');

cy.wait(5000);

ofertaPage

.clicarWrapper({ force: true })

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
