describe("Tasks Feature", () => {
  it("User logged in can access tasks list", () => {
    cy.visit("/login");
    cy.get("#email").type("uno@uno.com");
    cy.get("#password").type("123456");
    cy.get("#login").click();
    cy.visit("/tasks");
    cy.url().should("eq", "http://localhost:8080/tasks");
    cy.contains("h1", "Tasks view");
    cy.contains("18/08/2022 - Roberto | Principal | CALLE Mayor, 102 - San Genaro");
  });
  it("User logged go to tasks details view", () => {
    cy.visit("/login");
    cy.get("#email").type("uno@uno.com");
    cy.get("#password").type("123456");
    cy.get("#login").click();
    cy.url().should("eq", "http://localhost:8080/tasks");
    cy.get('a[href="/taskDetails/5"]').click({ force: true });
    cy.url().should("eq", "http://localhost:8080/taskDetails/5");
    cy.contains("h1", "15/08/2019 - Roberto | CALLE Mayor, 10 - San Genaro");
  });
  it("User logged go back to tasks list", () => {
    cy.visit("/login");
    cy.get("#email").type("uno@uno.com");
    cy.get("#password").type("123456");
    cy.get("#login").click();
    cy.url().should("eq", "http://localhost:8080/tasks");
    cy.get('a[href="/taskDetails/5"]').click({ force: true });
    cy.url().should("eq", "http://localhost:8080/taskDetails/5");
    cy.contains("h1", "15/08/2019 - Roberto | CALLE Mayor, 10 - San Genaro");
    cy.get("#back").click();
    cy.url().should("eq", "http://localhost:8080/tasks");
    cy.contains("h1", "Tasks view");
  });
});
