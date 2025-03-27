import { i18n } from "~/i18n/i18n-utils.ts";
import { trackInteraction } from "~/components/feedback/matomo.ts";
import { PrimaryButton } from "~/components/buttons/primary-button/index.tsx";
import { SecondaryButton } from "~/components/buttons/secondary-button/index.tsx";

interface OverviewChecklistLayoutProps {
	goToPreviousStep: () => void;
	children: React.ReactNode;
	showHint?: boolean;
}

export function OverviewChecklistLayout({
	goToPreviousStep,
	children,
	showHint,
}: OverviewChecklistLayoutProps) {
	return (
		<div className="flex h-full flex-col gap-8 text-base lg:text-2xl">
			<div className="flex flex-col gap-8">
				<div className="flex flex-row items-center gap-4">
					<img
						src="/images/check.svg"
						alt="check icon"
						className="size-[55px]"
					/>
					<h2 className="flex w-full items-center justify-between gap-3 font-bold text-2xl lg:text-4xl">
						{i18n("overview.title")}
					</h2>
				</div>
				<p dangerouslySetInnerHTML={{ __html: i18n("overview.text.1") }} />
				<div className="flex flex-col gap-1">
					<h3
						className="font-bold"
						dangerouslySetInnerHTML={{ __html: i18n("overview.title.2") }}
					/>
					<p dangerouslySetInnerHTML={{ __html: i18n("overview.text.2") }} />
				</div>
			</div>
			<ul className="flex flex-col gap-3">{children}</ul>
			<div className="flex h-full w-full flex-row items-end justify-end lg:justify-between print:hidden">
				<SecondaryButton
					label={i18n("button.back")}
					onClick={goToPreviousStep}
					className="hidden lg:flex"
				/>
				<div className="relative">
					<PrimaryButton
						label={i18n("button.print")}
						onClick={() => {
							const originalTitle = document.title;
							document.title = "Dokumenten-Checkliste-Bürgeramt";
							trackInteraction({
								eventAction: "button click",
								eventName: "print document checklist",
							});
							window.print();
							document.title = originalTitle;
						}}
						type="button"
					/>
				</div>
			</div>

			<div className={`${showHint ? "" : "hidden"} flex flex-col gap-1`}>
				<h3
					className="font-bold"
					dangerouslySetInnerHTML={{
						__html: i18n("overview.id-card.hint.title"),
					}}
				/>
				<p
					dangerouslySetInnerHTML={{
						__html: i18n("overview.id-card.hint.text"),
					}}
				/>
			</div>
			<div>
				<p
					className="pt-6"
					dangerouslySetInnerHTML={{ __html: i18n("context") }}
				/>
			</div>
		</div>
	);
}
