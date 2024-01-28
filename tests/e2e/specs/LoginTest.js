// https://docs.cypress.io/api/table-of-contents

describe("Use Login Feature", () => {
  it("User can not access to protected routes", () => {
    cy.visit("http://localhost:8080/tasks");
    cy.url().should("eq", "http://localhost:8080/login");
  });
  it("User with wrong credentials can not access", () => {
    cy.visit("/login");
    cy.get("#email").type("demo@demos.com");
    cy.get("#password").type("123456");
    cy.get("#login").click();
    cy.contains("p", "Ha habido un error");
    cy.visit("/tasks");
    cy.url().should("eq", "http://localhost:8080/login");
  });
  it("User can successfully login", () => {
    cy.visit("/login");
    cy.get("#email").type("uno@uno.com");
    cy.get("#password").type("123456");
    cy.get("#login").click();
    cy.visit("/tasks");
    cy.url().should("eq", "http://localhost:8080/tasks");
  });
});
