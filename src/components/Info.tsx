import {AccordionCard} from "./ui/AccordionCard.tsx";
import {metrics} from "@/data/metrics.js";

export const Info = () => {


	return (
		<>
			<h2 className="text-2xl font-bold">Метрики</h2>
			<div className="w-full gap-2 bg-white p-4 rounded-xl">
				{
					metrics.map((metric, index) => (
						<AccordionCard title={metric.name} text={metric.description} important={metric.important} key={index} />
					))
				}
			</div>
		</>
	);
};
