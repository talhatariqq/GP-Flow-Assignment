import { navbarPOM } from "../../support/pages/navbar"

describe("GP Flow Website", () => {
	beforeEach(() => {
		cy.visitWebsite()
	})

	it("Verify Navbar Options", () => {
		navbarPOM.getNavBar().should('be.visible')
		navbarPOM.getNavBarOptions().eq(0).should('contain', 'Solutions')
		navbarPOM.getNavBarOptions().eq(1).should('contain', 'Platform')
		navbarPOM.getNavBarOptions().eq(2).should('contain', 'Pricing')
		navbarPOM.getNavBarOptions().eq(3).should('contain', 'Resources')
		navbarPOM.getNavBarOptions().eq(4).should('contain', 'About Us')
	})

	it("Verify Solutions Overview page", () => {
		navbarPOM.getSolutionsOption().trigger('mouseover')
		navbarPOM.getOverviewOption().contains('Overview').click()
		navbarPOM.getUrl().should('include', '/solutions')
		navbarPOM.getOnboardingInvestersSection().should('exist')
		navbarPOM.getOnboardingSectionTitle().contains('Onboarding Investors')
		navbarPOM.getOnboardingSectionHeading().contains('Confidently onboard more investors')
		navbarPOM.getOnboardingSectionPoints().eq(0).contains('Initiate seamless KYC checks for new investors or partners')
		navbarPOM.getOnboardingSectionPoints().eq(1).contains('Automate the KYC/ AML process including ID, Liveness, Proof of address and AML screening')
	})

	it("Verify Platform Overview page", () => {
		navbarPOM.getPlatformOption().trigger('mouseover')
		navbarPOM.getPlatformOverview().contains('Platform Overview').click()
		navbarPOM.getUrl().should('include', '/platform-overview')
		navbarPOM.getPlatformHeading().contains('We give GPs and Fund Managers the technology to scale')
	})

	it("Verify Pricing page", () => {
		navbarPOM.getPricingOption().click()
		navbarPOM.getUrl().should('include', '/pricing')
		navbarPOM.getPricingHeading().contains('Start for free and scale your investor experience.')
	})

	it("Verify Resources page", () => {
		navbarPOM.getResourcesOption().click()
		navbarPOM.getUrl().should('include', '/learn')
		navbarPOM.getResourcesHeading().contains('Learning Center')
	})

	it("Verify Abbout Us page", () => {
		navbarPOM.getAboutUsOption().click()
		navbarPOM.getUrl().should('include', '/about')
		navbarPOM.getAboutUsHeading().contains('We are on a mission to increase access to alternative investments')
	})
})
