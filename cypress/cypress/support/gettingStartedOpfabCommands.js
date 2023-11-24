export class GettingStartedOpfabCommands {

    loginWithUser = function (user, visitURL = true) {
        if (visitURL)
            cy.visit('http://localhost:2002');
        cy.get('#opfab-login').type(user);
        cy.get('#opfab-password').type('test');
        cy.get('#opfab-login-btn-submit').click();
        cy.get('#opfab-cypress-loaded-check', {timeout: 20000}).should('have.text', 'true');
    }

    logout = function () {
        cy.get('#opfab-navbar-drop-user-menu').click();
        cy.get('#opfab-navbar-right-menu-logout').click();
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

    checkOpenedCardBuildInTemplateMessage = function (message) {
        cy.get('of-card').find('opfab-message-card').should('contain.text', message);
    }

    checkOpenedCardBuildInTemplateQuestion = function (message) {
        cy.get('of-card').find('opfab-question-card').find('h2').should('contain.text', message);
    }

    answerToBuildInTemplateQuestion = function (message) {
        cy.get('of-card').find('opfab-question-card').find('#template_response_input').type(message);
        cy.get('#opfab-card-details-btn-response').click();
    }

    checkAnswerInBuildInTemplateQuestion = function (response) {
        cy.get('of-card').find('opfab-question-card').find('#template_responses').should('contain.text', response);
    }

    checkTimelineDotCount = function (count) {
        cy.get('of-custom-timeline-chart').find('[type="button"]').should('have.length', count);
    }

    openUserCardMenu = function () {
        cy.get('#opfab-newcard-menu').click();
    }

    selectOptionsFromMultiselect= function (multiselectId, option) {
        cy.get(multiselectId).click();
        cy.get(multiselectId).find('.vscomp-search-input').clear();
        cy.get(multiselectId).find('.vscomp-search-input').type(option);
        cy.get(multiselectId).find('.vscomp-option-text').eq(0).should('contain.text', option);
        cy.get(multiselectId).find('.vscomp-option-text').eq(0).click();
        cy.wait(200);
    }

    selectState = function (stateName) {
        this.selectOptionsFromMultiselect('#of-state-filter', stateName);
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