import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the website', () => 
{
    
    cy.visit("https://imarscrmdev.phxa.com/MARSWeb2/Login");
    
});

When('Enter {string} and {string}', (username,password) =>
{
    cy.get(".k-input-inner[placeholder='UserId']").clear 
    cy.get(".k-input-inner[placeholder='UserId']").type(username)   
    cy.get(".k-input-inner[type='password']").clear   
    cy.get(".k-input-inner[type='password']").type(password)
    
});

And('I click the login button', () => 
{

    cy.get("span:nth-child(2)#btnLogin").click()

    
});

Then('I should be logged in', () => 
{

    cy.url().should('contain','Dashboard')
    cy.get("#dynamicModalLabel1").should('contain','Recurring Reports Expiring Soon')
    cy.get("#btnClose0").click()
    //cy.wait(3000)  
    cy.get("#imgMarsLogo").should('have.attr','src','https://imarscrmdev.phxa.com/MARSWeb/images/Logo/HomePage_Logo.png')   
    
});