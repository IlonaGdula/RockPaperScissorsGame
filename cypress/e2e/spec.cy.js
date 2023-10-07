// Describe the test suite for the Rock Paper Scissors game
describe('Testing the Game-rock-paper-scissors', () => {
  // Before each test, visit the game's URL
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/index.html");
  });

  // Test case: Check if the game buttons exist
  it('should check the game buttons', () => {
    // Query for the elements' attributes and check if they exist
    cy.get('#rock').should("exist");
    cy.get('#paper').should("exist");
    cy.get('#scissors').should("exist");
  });

  // Test case: Play the game with Rock and verify the result
  it('should play the game with Rock and verify the result', () => {
    // Click the "Rock" button
    cy.get('#rock').click();
  
    // Verify that the game result is displayed and is one of the expected outcomes
    cy.get('#result').should('be.visible').then(($result) => {
      // Check that the result contains one of the expected outcomes
      const expectedOutcomes = ['You win!', 'You lose!', 'Computer wins!', "It's a tie!"];
      expect(expectedOutcomes).to.include($result.text());
    });
  });

  // Test case: Play the game with Paper and verify the result
  it('should play the game with Paper and verify the result', () => {
    // Click the Paper button
    cy.get('#paper').click();
  
    // Verify that the game result is displayed and is one of the expected outcomes
    cy.get('#result').should('be.visible').then(($result) => {
      // Check that the result contains one of the expected outcomes
      const expectedOutcomes = ['You win!', 'You lose!', 'Computer wins!', "It's a tie!"];
      expect(expectedOutcomes).to.include($result.text());
    });
  });

  // Test case: Play the game with Scissors and verify the result
  it('should play the game with Scissors and verify the result', () => {
    // Click the Scissors button
    cy.get('#scissors').click();
  
    // Verify that the game result is displayed and is one of the expected outcomes
    cy.get('#result').should('be.visible').then(($result) => {
      // Check that the result contains one of the expected outcomes
      const expectedOutcomes = ['You win!', 'You lose!', 'Computer wins!', "It's a tie!"];
      expect(expectedOutcomes).to.include($result.text());
    });
  });
});