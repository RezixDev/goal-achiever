// components/schedule/BreaksList.tsx
import React from "react";
import { Clock } from "lucide-react";
import { BreakActivity } from "@/data/types";

interface BreaksListProps {
	activities: BreakActivity[];
}

export const BreaksList: React.FC<BreaksListProps> = ({ activities }) => {
	if (!activities?.length) {
		return (
			<div className="text-center text-gray-500 py-4">
				Keine Pausenaktivitäten verfügbar
			</div>
		);
	}

	return (
		<div className="space-y-4">
			<h3 className="font-semibold mb-3">Empfohlene Pausenaktivitäten:</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{activities.map((activity, index) => {
					const IconComponent = activity.icon;
					return (
						<div
							key={index}
							className="p-3 rounded border bg-gray-50 flex items-start space-x-3"
						>
							<IconComponent className="w-5 h-5 mt-1" />
							<div>
								<div className="font-medium">{activity.title}</div>
								<div className="text-sm text-gray-600">
									{activity.description}
								</div>
								<div className="text-sm text-gray-500 mt-1">
									<Clock className="w-4 h-4 inline mr-1" />
									{activity.duration}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
