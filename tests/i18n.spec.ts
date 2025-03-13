import { test, expect } from "@playwright/test";

test("should translate page to english", async ({ page }) => {
	await page.goto("http://localhost:5173/");

	const languageButton = page.locator("#language-button");
	await languageButton.click();

	const languageAnchorEN = page.getByText("English");
	await languageAnchorEN.click();

	const englishHeading = page.getByRole("heading", {
		name: "Welcome to the checklist",
	});

	await expect(englishHeading).toBeVisible();
});

test("should translate page to german", async ({ page }) => {
	await page.goto("http://localhost:5173/");

	const languageButton = page.locator("#language-button");
	await languageButton.click();

	const languageAnchorDE = page.getByRole("link", { name: "Deutsch" });
	await languageAnchorDE.click();

	const germanHeading = page.getByRole("heading", {
		name: "Willkommen bei der Checkliste",
	});

	await expect(germanHeading).toBeVisible();
});

test("should translate page to arabic", async ({ page }) => {
	await page.goto("http://localhost:5173/");

	const languageButton = page.locator("#language-button");
	await languageButton.click();

	const languageAnchorAR = page.getByText("العربية");
	await languageAnchorAR.click();

	const arabicHeading = page.getByRole("heading", {
		name: "مرحباً بك في قائمة المراجعة",
	});

	await expect(arabicHeading).toBeVisible();
});

test("should translate page to spanish", async ({ page }) => {
	await page.goto("http://localhost:5173/");

	const languageButton = page.locator("#language-button");
	await languageButton.click();

	const languageAnchorES = page.getByText("Español");
	await languageAnchorES.click();

	const spanishHeading = page.getByRole("heading", {
		name: "Bienvenido a la lista de control",
	});

	await expect(spanishHeading).toBeVisible();
});

test("should translate page to french", async ({ page }) => {
	await page.goto("http://localhost:5173/");

	const languageButton = page.locator("#language-button");
	await languageButton.click();

	const languageAnchorFR = page.getByText("Français");
	await languageAnchorFR.click();

	const frenchHeading = page.getByRole("heading", {
		name: "Bienvenue sur la liste de contrôle",
	});

	await expect(frenchHeading).toBeVisible();
});

test("should translate page to turkish", async ({ page }) => {
	await page.goto("http://localhost:5173/");

	const languageButton = page.locator("#language-button");
	await languageButton.click();

	const languageAnchorTR = page.getByText("Türkçe");
	await languageAnchorTR.click();

	const turkishHeading = page.getByRole("heading", {
		name: "Kontrol listesine hoş geldiniz",
	});

	await expect(turkishHeading).toBeVisible();
});

test("should translate page to russian", async ({ page }) => {
	await page.goto("http://localhost:5173/");

	const languageButton = page.locator("#language-button");
	await languageButton.click();

	const languageAnchorRU = page.getByText("Русский");
	await languageAnchorRU.click();

	const russianHeading = page.getByRole("heading", {
		name: "Добро пожаловать в контрольный список",
	});

	await expect(russianHeading).toBeVisible();
});

test("should keep the same language after refresh", async ({ page }) => {
	await page.goto("http://localhost:5173/");

	const languageButton = page.locator("#language-button");
	await languageButton.click();

	const languageAnchorEN = page.getByText("English");
	await languageAnchorEN.click();

	const englishHeadingBeforeRefresh = page.getByRole("heading", {
		name: "Welcome to the checklist",
	});

	await expect(englishHeadingBeforeRefresh).toBeVisible();

	await page.reload();

	const englishHeadingAfterRefresh = page.getByRole("heading", {
		name: "Welcome to the checklist",
	});

	await expect(englishHeadingAfterRefresh).toBeVisible();
});

test("should correctly change document lang and dir when switching language from german to arabic and back", async ({
	page,
}) => {
	await page.goto("http://localhost:5173/");

	const initialLang = await page.evaluate(() => document.documentElement.lang);
	const initialDir = await page.evaluate(() => document.documentElement.dir);

	expect(initialLang).toBe("de");
	expect(initialDir).toBe("ltr");

	const languageButton = page.locator("#language-button");
	await languageButton.click();

	const languageAnchorAR = page.getByRole("link", { name: "العربية" });
	await languageAnchorAR.click();

	const arabicLang = await page.evaluate(() => document.documentElement.lang);
	const arabicDir = await page.evaluate(() => document.documentElement.dir);

	expect(arabicLang).toBe("ar");
	expect(arabicDir).toBe("rtl");

	await languageButton.click();

	const languageAnchorDE = page.getByRole("link", { name: "Deutsch" });
	await languageAnchorDE.click();

	const germanLang = await page.evaluate(() => document.documentElement.lang);
	const germanDir = await page.evaluate(() => document.documentElement.dir);

	expect(germanLang).toBe("de");
	expect(germanDir).toBe("ltr");
});
