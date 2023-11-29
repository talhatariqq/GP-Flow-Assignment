export class emailTemplate {

    getNavBar() {
        return cy.get('[role="navigation"]')
    }
    getNavBarOptions() {
        return cy.get('[role="navigation"] [role="list"] ').find('[class="nav-item-wrapper last"]')
    }
    getfooter() {
        return cy.get('.footer')
    }
    getEmailTemplate() {
        return cy.get('.footer-nav-main-wrapper [role="list"] .footer-nav-item').eq(6)
    }
    getUrl() {
        return cy.url()
    }
    getFirstName() {
        return cy.get('.hs_firstname')
    }
    getLastName() {
        return cy.get('.hs_lastname')
    }
    getCompanyName() {
        return cy.get('.hs_company')
    }
    getWorkEmail() {
        return cy.get('.hs_email')
    }
    getSubmitButton() {
        return cy.get('.hs_submit').find('[value="Get Free Templates"]')
    }
    getSubmitMessage() {
        return cy.get('.submitted-message')
    }
}
export const emailTemplatePOM = new emailTemplate();
