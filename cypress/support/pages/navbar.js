export class navbar {
	getUrl() {
		return cy.url()
	}
	getNavBar() {
		return cy.get('[role="navigation"]')
	}
	getNavBarOptions() {
		return cy.get('[role="navigation"] [role="list"] ').find('[class="nav-item-wrapper last"]')
	}
	getSolutionsOption() {
		return this.getNavBarOptions().eq(0)
	}
	getOverviewOption() {
		return cy.get('[class="dropdown-list-item"]')
	}
	getOnboardingInvestersSection() {
		return cy.get('div:nth-child(4) .container-default')
	}
	getOnboardingSectionTitle() {
		return this.getOnboardingInvestersSection().find('[class="label-text"]')
	}
	getOnboardingSectionHeading() {
		return this.getOnboardingInvestersSection().find('h2')
	}
	getOnboardingSectionPoints() {
		return this.getOnboardingInvestersSection().find('[role="list"] li')
	}
	getPlatformOption() {
		return this.getNavBarOptions().eq(1)
	}
	getPlatformOverview() {
		return cy.get('.header-nav-hero')
	}
	getPlatformHeading() {
		return cy.get('h1')
	}
	getPricingOption() {
		return this.getNavBarOptions().eq(2)
	}
	getPricingHeading() {
		return cy.get('h1')
	}
	getResourcesOption() {
		return this.getNavBarOptions().eq(3)
	}
	getResourcesHeading() {
		return cy.get('.blog-category-hero h1')
	}
	getAboutUsOption() {
		return this.getNavBarOptions().eq(4)
	}
	getAboutUsHeading() {
		return cy.get('.homepage-hero h1')
	}
}

export const navbarPOM = new navbar();
