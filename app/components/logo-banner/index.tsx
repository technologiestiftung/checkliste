import { i18n } from "~/i18n/i18n-utils";

export function LogoBanner() {
	return (
		<div className="flex w-full justify-center gap-y-4 px-8 pb-2.5">
			<div className="flex flex-col text-sm md:flex-row md:items-end gap-x-10 gap-y-7.5">
				<img
					src="/images/logo-citylab-berlin.svg"
					alt="Logo von CityLab Berlin"
					className="w-full sm:w-[240px] max-w-[320px] shrink"
					loading="lazy"
				/>

				<div className="flex flex-col gap-4 justify-between h-full">
					{i18n("logo.t2")}
					<img
						src="/images/logo-technologiestiftung-berlin-de.svg"
						alt="Logo von Technologiestiftung Berlin"
						className="w-1/2 sm:w-[160px] max-w-[220px]"
						loading="lazy"
					/>
				</div>
				<div className="flex flex-col gap-4 justify-between h-full">
					{i18n("logo.t3")}
					<img
						src="/images/logo-senatskanzlei-buergermeister-horizontal.svg"
						alt="Logo von Berlins Regierender Bürgermeister"
						className="w-9/10 sm:w-[225px] max-w-[320px]"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	);
}
