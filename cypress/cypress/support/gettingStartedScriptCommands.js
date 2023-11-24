export class GettingStartedScriptCommands {

    deleteAllCards = function () {
        cy.exec('./scripts/deleteAllCards.sh');
    }

    setupPerimeterForExample = function (example) {
        cy.exec('cd ../client/example' + example + ' && ./setupPerimeter.sh perimeter.json');
    }

    setupPerimeterForExample5 = function () {
        cy.exec('cd ../client/example5 && source ../getToken.sh && ./createPerimeter.sh perimeter.json && ./putPerimeterForGroup.sh');
    }

    sendCardForExample = function (example, cardToSend) {
        cy.exec('cd ../client/example' + example + ' && ./sendCard.sh ' + cardToSend);
    }

    deleteCardForExample = function (example) {
        cy.exec('cd ../client/example' + example + ' && ./deleteCard.sh');
    }

    packageBundleForExample = function (example) {
        cy.exec('cd ../client/example' + example + ' && ./packageBundle.sh');
    }

    sendBundleForExample = function (example) {
        cy.exec('cd ../client/example' + example + ' && source ../getToken.sh && ./sendBundle.sh');
    }

    deleteBundleArchiveForExample = function (example) {
        cy.exec('./scripts/deleteBundleArchive.sh ' + example);
    }

    packageUpdatedBundleForExample6 = function () {
        cy.exec('cd ../client/example6 && ./packageBundle_updated.sh');
    }

    packageUpdatedBundleForExample7 = function () {
        cy.exec('cd ../client/example7 && ./packageBundle_updated.sh');
    }
}