describe('Проверка авторизации', function () {

    it('Успешная авторизация', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

     it('Востановление пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click();
         cy.get('#mailForgot').type('german@dolnikov.ru');
         cy.get('#restoreEmailButton').click();
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     }) 

     it('Верный логин и не верный  пароль', function () {
          cy.visit('https://login.qa.studio/');
          cy.get('#mail').type('german@dolnikov.ru');
          cy.get('#pass').type('iLoveqastudio0');
          cy.get('#loginButton').click();
          cy.get('#messageHeader').contains('Такого логина или пароля нет');
          cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

     it('Не верный логин и верный  пароль', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('rerman@dolnikov.ru');
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click();
      cy.get('#messageHeader').contains('Такого логина или пароля нет');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
    
     it('Логин без @', function () {
          cy.visit('https://login.qa.studio/');
          cy.get('#mail').type('rermandolnikov.ru');
          cy.get('#pass').type('iLoveqastudio1');
          cy.get('#loginButton').click();
          cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
          cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

     it('Cтрочные буквы в логине', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('GerMan@Dolnikov.ru');
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click();
      cy.get('#messageHeader').contains('Авторизация прошла успешно');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
 })
 })