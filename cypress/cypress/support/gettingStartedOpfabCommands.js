export class GettingStartedOpfabCommands {

    loginWithUser = function (user) {
        cy.visit('http://localhost:2002');
        cy.get('#opfab-login').type(user);
        cy.get('#opfab-password').type('test');
        cy.get('#opfab-login-btn-submit').click();
        cy.get('#opfab-cypress-loaded-check', {timeout: 20000}).should('have.text', 'true');
    }

    openFirstCard = function () {
        cy.get('of-light-card').eq(0).click();
    }

    //'compliant', 'action', 'information', 'alarm'
    checkFirstCardSeverity = function (severity) {
        cy.get('of-light-card').eq(0).find('.opfab-bg-sev-' + severity);
    }

    checkOpenedCardTitle = function (title) {
        cy.get('of-card').find('#opfab-card-title').should('have.text', title);
    }

    checkOpenedCardMessage = function (message) {
        cy.get('of-card').find('#opfab-div-card-template-processed').find('h2').should('have.text', message);
    }

    checkTimelineDotCount = function (count) {
        cy.get('of-custom-timeline-chart').find('[type="button"]').should('have.length', count);
    }

    openUserCardMenu = function () {
        cy.get('#opfab-newcard-menu').click();
    }

    closeUserCardMenu = function () {
        cy.get('#opfab-usercard-close').click();
    }

    selectRecipient = function (name) {
        const recipientListToggle = cy.get('#userCardRecipients').find('.vscomp-toggle-button');
        recipientListToggle.click();
        cy.get('#userCardRecipients').find('.vscomp-options').find('[data-value="' + name + '"]').click();
        recipientListToggle.click();
    }
}