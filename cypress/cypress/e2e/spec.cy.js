import { GettingStartedOpfabCommands } from "../support/gettingStartedOpfabCommands"
import { GettingStartedScriptCommands } from "../support/gettingStartedScriptCommands";

describe('Getting Started Examples', () => {
  const opfab = new GettingStartedOpfabCommands();
  const script = new GettingStartedScriptCommands();



  describe('Example 1', () => {
    it('Send card', () => {
      script.deleteAllCards();
      script.setupPerimeterForExample('1');
      opfab.loginWithUser('operator1_fr');
      script.sendCardForExample('1', 'card.json');
      opfab.checkFirstCardSeverity('information');
      opfab.openFirstCard();
      opfab.checkOpenedCardMessage('Message :  Hello World !!! That\'s my first message!');
    })

    it('Update card', () => {
      script.deleteAllCards();
      opfab.loginWithUser('operator1_fr');
      script.sendCardForExample('1', 'cardUpdate.json');
      opfab.checkFirstCardSeverity('alarm');
      opfab.openFirstCard();
      opfab.checkOpenedCardMessage('Message :  :That\'s my second message!');
    })

    it('Delete card', () => {
      opfab.loginWithUser('operator1_fr');
      //make sure the card is displayed before delete
      cy.get('of-light-card');
      script.deleteCardForExample('1');
      cy.get('of-light-card').should('not.exist');
    })
  })



  describe('Example 2', () => {
    it('Send new bundle', () => {
      script.packageBundleForExample('2');
      script.sendBundleForExample('2');
      script.deleteBundleArchiveForExample('2');
    })

    it('Send card with new process version', () => {
      script.deleteAllCards();
      opfab.loginWithUser('operator1_fr');
      script.sendCardForExample('2', 'card.json');
      opfab.openFirstCard();
      opfab.checkOpenedCardMessage(' You received the following message ');
    })
  })



  describe('Example 3', () => {
    it('Send card', () => {
      script.deleteAllCards();
      script.setupPerimeterForExample('3');
      opfab.loginWithUser('operator1_fr');
      script.sendCardForExample('3', 'card.json');
      opfab.openFirstCard();
      opfab.checkOpenedCardTitle('CRITICAL SITUATION');
    })

    it('Send update card', () => {
      script.deleteAllCards();
      opfab.loginWithUser('operator1_fr');
      script.sendCardForExample('3', 'cardUpdate.json');
      opfab.openFirstCard();
      opfab.checkOpenedCardTitle('CRITICAL SITUATION - UPDATE');
    })

    it('Send end card', () => {
      script.deleteAllCards();
      opfab.loginWithUser('operator1_fr');
      script.sendCardForExample('3', 'cardEnd.json');
      opfab.openFirstCard();
      opfab.checkOpenedCardTitle('CRITICAL SITUATION - END');
    })
  })



  describe('Example 4', () => {
    it('Send card timeline dots', () => {
      script.deleteAllCards();
      script.setupPerimeterForExample('4');
      opfab.loginWithUser('operator1_fr');
      script.sendCardForExample('4', 'card.json');
      opfab.checkTimelineDotCount(2);
      script.sendCardForExample('4', 'card2.json');
      opfab.checkTimelineDotCount(4);
    })
  })



  describe('Example 5', () => {
    it('Send card to entity', () => {
      script.deleteAllCards();
      opfab.loginWithUser('operator1_fr');
      script.sendCardForExample('5', 'cardSentToEntity.json');
      cy.wait(2000);
      cy.get('of-light-card').should('not.exist');
      script.createPerimeterAndAttachToGroup();
      cy.reload();
      opfab.openFirstCard();
    })

    it('Send card to entity and group', () => {
      script.deleteAllCards();
      opfab.loginWithUser('operator1_fr');
      script.sendCardForExample('5', 'cardSentToEntityAndGroup_1.json');
      cy.wait(2000);
      cy.get('of-light-card').should('not.exist');
      script.sendCardForExample('5', 'cardSentToEntityAndGroup_2.json');
      opfab.openFirstCard();
    })
  })



  describe('Example 6', () => {
    it('Send usercard', () => {
      script.deleteAllCards();
      opfab.loginWithUser('operator1_fr');
      opfab.openUserCardMenu();
      //Verify that current perimeter does not allow usercard creation
      cy.get('of-usercard').should('have.text', 'You are not allowed to send card.');
      opfab.closeUserCardMenu();
      script.setupPerimeterForExample('6');
      script.packageBundleForExample('6');
      script.sendBundleForExample('6');
      script.deleteBundleArchiveForExample('6');
      cy.reload();
      opfab.openUserCardMenu();
      cy.get('.opfab-textarea').type('test message');
      opfab.selectRecipient('ENTITY1_FR');
      cy.get('#opfab-usercard-btn-prepareCard').click();
      cy.get('#opfab-usercard-btn-accept').click();
      opfab.openFirstCard();
    })

    it('Send usercard with updated template', () => {
      script.deleteAllCards();
      script.packageBundleUpdated();
      script.sendBundleForExample('6');
      script.deleteBundleArchiveForExample('6');
      opfab.loginWithUser('operator1_fr');
      opfab.openUserCardMenu();
      cy.get('.opfab-textarea').eq(0).type('test object');
      cy.get('.opfab-textarea').eq(1).type('test message');
      opfab.selectRecipient('ENTITY1_FR');
      cy.get('#opfab-usercard-btn-prepareCard').click();
      cy.get('#opfab-usercard-btn-accept').click();
      opfab.openFirstCard();
    })
  })
})