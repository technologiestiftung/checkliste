import { Steps } from "../../components/steps";
import { Progress } from "../../components/progress";
import { i18n } from "~/i18n/i18n-utils";
import { FormLayout } from "~/components/form-layout";

export default function Index() {
	return (
		<FormLayout>
			<div className="w-full bg-berlin-blue-400">
				<h2 className="text-xl lg:text-4xl font-bold px-7.5 py-2.5 lg:max-w-[974px] mx-auto lg:px-0">
					{i18n("title.residence-registration")}
				</h2>
			</div>
			<div className="flex flex-col h-full justify-start px-7.5 py-10 lg:max-w-[974px] mx-auto lg:px-0 w-full">
				<div className="flex w-full print:hidden">
					<Progress />
				</div>
				<div className="flex flex-col items-start">
					<Steps />
				</div>
			</div>
		</FormLayout>
	);
}
