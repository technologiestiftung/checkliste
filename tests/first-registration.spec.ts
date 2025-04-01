import { test, expect } from "@playwright/test";

test("should have 3 documents in their checklist: registrationForm, movingInConfirmation, germanIdOrPassport", async ({
	page,
}) => {
	await page.goto("http://localhost:5173/residence-registration/");

	const nextButton = page.getByRole("button", { name: "Weiter" });

	let noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");

	await noRadio.click(); // first registration in berlin?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // are you married?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // do you have kids under 18?
	await nextButton.click();

	const yesRadio = page.getByLabel("Ja");
	await yesRadio.click(); // do you have the german nationality?
	await nextButton.click();

	noRadio = page.locator("div").filter({ hasText: /^Ja$/ }).getByRole("radio");
	await noRadio.click(); // Are you over 16?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // Do you stay registered in another flat?
	await nextButton.click();

	const registrationForm = page
		.locator("div > div")
		.filter({ hasText: /^Anmeldeformular$/ });
	const movingInConfirmation = page.locator("div > div").filter({
		hasText: /^Einzugsbestätigung des Wohnungsgebers\/ Vermieters$/,
	});
	const germanIdOrPassport = page
		.locator("div > div")
		.filter({ hasText: /^Ihr eigener Personalausweis oder Reisepass$/ });

	await expect(registrationForm).toBeVisible();
	await expect(movingInConfirmation).toBeVisible();
	await expect(germanIdOrPassport).toBeVisible();
});

test("should have 4 documents in their checklist: registrationForm, movingInConfirmation, germanIdOrPassport, birthCertificate", async ({
	page,
}) => {
	await page.goto("http://localhost:5173/residence-registration/");

	const nextButton = page.getByRole("button", { name: "Weiter" });

	let noRadio;
	let yesRadio = page.getByLabel("Ja");

	await yesRadio.click(); // first registration in berlin?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // are you married?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // do you have kids under 18?
	await nextButton.click();

	yesRadio = page.getByLabel("Ja");
	await yesRadio.click(); // do you have the german nationality?
	await nextButton.click();

	noRadio = page.locator("div").filter({ hasText: /^Ja$/ }).getByRole("radio");
	await noRadio.click(); // Are you over 16?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // Do you stay registered in another flat?
	await nextButton.click();

	const registrationForm = page
		.locator("div > div")
		.filter({ hasText: /^Anmeldeformular$/ });
	const movingInConfirmation = page.locator("div > div").filter({
		hasText: /^Einzugsbestätigung des Wohnungsgebers\/ Vermieters$/,
	});
	const birthCertificate = page
		.locator("div > div")
		.filter({ hasText: /^Geburtsurkunde$/ });
	const germanIdOrPassport = page
		.locator("div > div")
		.filter({ hasText: /^Ihr eigener Personalausweis oder Reisepass$/ });

	await expect(registrationForm).toBeVisible();
	await expect(movingInConfirmation).toBeVisible();
	await expect(birthCertificate).toBeVisible();
	await expect(germanIdOrPassport).toBeVisible();
});

test("should have 5 documents in their checklist: registrationForm, movingInConfirmation, germanIdOrPassport, birthCertificate, marriageCertificate", async ({
	page,
}) => {
	await page.goto("http://localhost:5173/residence-registration/");

	const nextButton = page.getByRole("button", { name: "Weiter" });

	let noRadio;
	let yesRadio = page.getByLabel("Ja");

	await yesRadio.click(); // first registration in berlin?
	await nextButton.click();

	yesRadio = page.getByLabel("Ja");
	await yesRadio.click(); // are you married?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // do you want to register your spouse?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // do you have kids under 18?
	await nextButton.click();

	yesRadio = page.getByLabel("Ja");
	await yesRadio.click(); // do you have the german nationality?
	await nextButton.click();

	noRadio = page
		.locator("div > div")
		.filter({ hasText: /^Ja$/ })
		.getByRole("radio");
	await noRadio.click(); // Are you over 16?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // Do you stay registered in another flat?
	await nextButton.click();

	const registrationForm = page
		.locator("div > div")
		.filter({ hasText: /^Anmeldeformular$/ });
	const movingInConfirmation = page.locator("div > div").filter({
		hasText: /^Einzugsbestätigung des Wohnungsgebers\/ Vermieters$/,
	});
	const germanIdOrPassport = page
		.locator("div > div")
		.filter({ hasText: /^Ihr eigener Personalausweis oder Reisepass$/ });
	const birthCertificate = page
		.locator("div > div")
		.filter({ hasText: /^Geburtsurkunde$/ });
	const marriageCertificate = page
		.locator("div > div")
		.filter({ hasText: /^Heiratsurkunde$/ });

	await expect(registrationForm).toBeVisible();
	await expect(movingInConfirmation).toBeVisible();
	await expect(germanIdOrPassport).toBeVisible();
	await expect(birthCertificate).toBeVisible();
	await expect(marriageCertificate).toBeVisible();
});

test("should have 6 documents in their checklist: registrationForm, movingInConfirmation, germanIdOrPassport, birthCertificate, marriageCertificate, idDocumentForSpouse", async ({
	page,
}) => {
	await page.goto("http://localhost:5173/residence-registration/");

	const nextButton = page.getByRole("button", { name: "Weiter" });

	let noRadio;
	let yesRadio = page.getByLabel("Ja");

	await yesRadio.click(); // first registration in berlin?
	await nextButton.click();

	yesRadio = page.getByLabel("Ja");
	await yesRadio.click(); // are you married?
	await nextButton.click();

	yesRadio = page.getByLabel("Ja");
	await yesRadio.click(); // do you want to register your spouse?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // do you have kids under 18?
	await nextButton.click();

	yesRadio = page.getByLabel("Ja");
	await yesRadio.click(); // do you have the german nationality?
	await nextButton.click();

	noRadio = page.locator("div").filter({ hasText: /^Ja$/ }).getByRole("radio");
	await noRadio.click(); // Are you over 16?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // Do you stay registered in another flat?
	await nextButton.click();

	const registrationForm = page
		.locator("div > div")
		.filter({ hasText: /^Anmeldeformular$/ });
	const movingInConfirmation = page.locator("div > div").filter({
		hasText: /^Einzugsbestätigung des Wohnungsgebers\/ Vermieters$/,
	});
	const germanIdOrPassport = page
		.locator("div > div")
		.filter({ hasText: /^Ihr eigener Personalausweis oder Reisepass$/ });
	const birthCertificate = page
		.locator("div > div")
		.filter({ hasText: /^Geburtsurkunde$/ });
	const marriageCertificate = page
		.locator("div > div")
		.filter({ hasText: /^Heiratsurkunde$/ });
	const idDocumentForSpouse = page.locator("div > div").filter({
		hasText:
			/^Personalausweis oder Reisepass der Ehepartnerin\/des Ehepartners$/,
	});

	await expect(registrationForm).toBeVisible();
	await expect(movingInConfirmation).toBeVisible();
	await expect(germanIdOrPassport).toBeVisible();
	await expect(birthCertificate).toBeVisible();
	await expect(marriageCertificate).toBeVisible();
	await expect(idDocumentForSpouse).toBeVisible();
});

test("should have 8 documents in their checklist: registrationForm, movingInConfirmation, germanIdOrPassport, birthCertificate, marriageCertificate, idDocumentForSpouse, childBirthCertificate, custodyDeclaration", async ({
	page,
}) => {
	await page.goto("http://localhost:5173/residence-registration/");

	const nextButton = page.getByRole("button", { name: "Weiter" });

	let noRadio;
	let yesRadio = page.getByLabel("Ja");

	await yesRadio.click(); // first registration in berlin?
	await nextButton.click();

	yesRadio = page.getByLabel("Ja");
	await yesRadio.click(); // are you married?
	await nextButton.click();

	yesRadio = page.getByLabel("Ja");
	await yesRadio.click(); // do you want to register your spouse?
	await nextButton.click();

	yesRadio = page.getByLabel("Ja");
	await yesRadio.click(); // do you have kids under 18?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // is a child moving with you?
	await nextButton.click();

	yesRadio = page.getByLabel("Ja");
	await yesRadio.click(); // do you have the german nationality?
	await nextButton.click();

	noRadio = page.locator("div").filter({ hasText: /^Ja$/ }).getByRole("radio");
	await noRadio.click(); // Are you over 16?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // Do you stay registered in another flat?
	await nextButton.click();

	const registrationForm = page
		.locator("div > div")
		.filter({ hasText: /^Anmeldeformular$/ });
	const movingInConfirmation = page.locator("div > div").filter({
		hasText: /^Einzugsbestätigung des Wohnungsgebers\/ Vermieters$/,
	});
	const germanIdOrPassport = page
		.locator("div > div")
		.filter({ hasText: /^Ihr eigener Personalausweis oder Reisepass$/ });
	const birthCertificate = page
		.locator("div > div")
		.filter({ hasText: /^Geburtsurkunde$/ });
	const marriageCertificate = page
		.locator("div > div")
		.filter({ hasText: /^Heiratsurkunde$/ });
	const idDocumentForSpouse = page.locator("div > div").filter({
		hasText:
			/^Personalausweis oder Reisepass der Ehepartnerin\/des Ehepartners$/,
	});
	const childBirthCertificate = page
		.locator("div > div")
		.filter({ hasText: /^Geburtsurkunde des Kindes\/der Kinder$/ });
	const custodyDeclaration = page
		.locator("div > div")
		.filter({ hasText: /^Sorgerechtserklärung$/ });

	await expect(registrationForm).toBeVisible();
	await expect(movingInConfirmation).toBeVisible();
	await expect(germanIdOrPassport).toBeVisible();
	await expect(birthCertificate).toBeVisible();
	await expect(marriageCertificate).toBeVisible();
	await expect(idDocumentForSpouse).toBeVisible();
	await expect(childBirthCertificate).toBeVisible();
	await expect(custodyDeclaration).toBeVisible();
});

test("should have 11 documents in their checklist: registrationForm, movingInConfirmation, germanIdOrPassport, birthCertificate, marriageCertificate, idDocumentForSpouse, childBirthCertificate, custodyDeclaration, idDocumentForChild, guardianConsent, additionalRegistrationForm", async ({
	page,
}) => {
	await page.goto("http://localhost:5173/residence-registration/");

	const nextButton = page.getByRole("button", { name: "Weiter" });

	let noRadio;
	let yesRadio = page.getByLabel("Ja");

	await yesRadio.click(); // first registration in berlin?
	await nextButton.click();

	yesRadio = page.getByLabel("Ja");
	await yesRadio.click(); // are you married?
	await nextButton.click();

	yesRadio = page.getByLabel("Ja");
	await yesRadio.click(); // do you want to register your spouse?
	await nextButton.click();

	yesRadio = page.getByLabel("Ja");
	await yesRadio.click(); // do you have kids under 18?
	await nextButton.click();

	yesRadio = page.getByLabel("Ja");
	await yesRadio.click(); // is a child moving with you?
	await nextButton.click();

	yesRadio = page.getByLabel("Ja");
	await yesRadio.click(); // do you have the german nationality?
	await nextButton.click();

	noRadio = page.locator("div").filter({ hasText: /^Ja$/ }).getByRole("radio");
	await noRadio.click(); // Are you over 16?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // Do you stay registered in another flat?
	await nextButton.click();

	const registrationForm = page
		.locator("div > div")
		.filter({ hasText: /^Anmeldeformular$/ });
	const movingInConfirmation = page.locator("div > div").filter({
		hasText: /^Einzugsbestätigung des Wohnungsgebers\/ Vermieters$/,
	});
	const germanIdOrPassport = page
		.locator("div > div")
		.filter({ hasText: /^Ihr eigener Personalausweis oder Reisepass$/ });
	const birthCertificate = page
		.locator("div > div")
		.filter({ hasText: /^Geburtsurkunde$/ });
	const marriageCertificate = page
		.locator("div > div")
		.filter({ hasText: /^Heiratsurkunde$/ });
	const idDocumentForSpouse = page.locator("div > div").filter({
		hasText:
			/^Personalausweis oder Reisepass der Ehepartnerin\/des Ehepartners$/,
	});
	const childBirthCertificate = page
		.locator("div > div")
		.filter({ hasText: /^Geburtsurkunde des Kindes\/der Kinder$/ });
	const custodyDeclaration = page
		.locator("div > div")
		.filter({ hasText: /^Sorgerechtserklärung$/ });
	const idDocumentForChild = page.locator("div > div").filter({
		hasText:
			/^Personalausweis, Reisepass oder Kinderpass des Kindes\/der Kinder$/,
	});
	const guardianConsent = page.locator("div > div").filter({
		hasText:
			/^Einverständniserklärung der Sorgeberechtigten des Kindes\/der Kinder$/,
	});
	const additionalRegistrationForm = page
		.locator("div > div")
		.filter({ hasText: /^Weiteres Anmeldeformular$/ });

	await expect(registrationForm).toBeVisible();
	await expect(movingInConfirmation).toBeVisible();
	await expect(germanIdOrPassport).toBeVisible();
	await expect(birthCertificate).toBeVisible();
	await expect(marriageCertificate).toBeVisible();
	await expect(idDocumentForSpouse).toBeVisible();
	await expect(childBirthCertificate).toBeVisible();
	await expect(custodyDeclaration).toBeVisible();
	await expect(idDocumentForChild).toBeVisible();
	await expect(guardianConsent).toBeVisible();
	await expect(additionalRegistrationForm).toBeVisible();
});
