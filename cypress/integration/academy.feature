Feature: academy

Feature Description: Consulta site GamaAcademy
            Como usuário, desejo ver opções de ofertas no site da Gama Academy

        Scenario: Entrar no site do tornese um programador e buscar opções
            Given que eu estou no site da gamaacademy
              And clico no botao devfullstack
             Then devo ver as opcoes
                  | Crie seu portfólio!                   |
                  | Acompanhamento de Carreira            |
                  | Professores de surf que sabem surfar! |
                  | Estude na Melhor Startup de Educação  |
