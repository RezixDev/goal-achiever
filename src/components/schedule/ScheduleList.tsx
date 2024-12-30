// components/schedule/ScheduleList.tsx
import { Clock, Brain } from "lucide-react";
interface ScheduleListProps {
	items: ScheduleItem[];
	getActivityColor: (type: string) => string;
}

const ScheduleList: React.FC<ScheduleListProps> = ({
	items,
	getActivityColor,
}) => {
	return (
		<div className="space-y-3">
			{items.map((item, index) => {
				const IconComponent = item.icon;
				return (
					<div
						key={index}
						className={`p-3 rounded border ${getActivityColor(
							item.type
						)} flex items-center space-x-3`}
					>
						<IconComponent className="w-5 h-5" />
						<Clock className="w-4 h-4" />
						<span className="font-medium">{item.time}</span>
						<span className="flex-1">{item.activity}</span>
						{item.energyLevel !== undefined && (
							<div className="flex items-center gap-2">
								<Brain className="w-4 h-4" />
								<span className="text-sm">Energie: {item.energyLevel}</span>
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
};

export { ScheduleList };
