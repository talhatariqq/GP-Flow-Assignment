import { emailTemplatePOM } from "../../support/pages/emailTemplateForm";

describe("GP Flow Website", () => {
	beforeEach(() => {
		cy.visitWebsite()
	})

	it("Verify Free Email Templates Form", () => {
		emailTemplatePOM.getfooter().scrollIntoView({ duration: 2000 });
		emailTemplatePOM.getEmailTemplate().contains('Email Templates').click()
		emailTemplatePOM.getUrl().should('include', '/emails')
		cy.get('#hs-form-iframe-0').then(($iframe) => {
			const iframeDoc = $iframe.contents();
			cy.wrap(iframeDoc).within(() => {
				emailTemplatePOM.getFirstName().contains('First name').type('Don')
				emailTemplatePOM.getLastName().contains('Last name').type('Toliver')
				emailTemplatePOM.getCompanyName().contains('Company name').type('Soundcloud')
				emailTemplatePOM.getWorkEmail().contains('Work Email').type('toliver@soundcloud.com')
				emailTemplatePOM.getSubmitButton().click()
				emailTemplatePOM.getSubmitMessage().contains('Thanks for your interest.')
			})
		})
	})
})	
