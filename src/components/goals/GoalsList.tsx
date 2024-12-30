import React from "react";
import { Progress } from "@/components/ui/progress";
import type { Goal } from "@/data/types";

interface GoalsListProps {
	goals: Goal[];
}

export const GoalsList: React.FC<GoalsListProps> = ({ goals }) => (
	<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
		{goals.map((goal, index) => (
			<div key={index} className="p-4 border rounded-lg">
				<div className="flex items-center gap-2 mb-2">
					<goal.icon className="w-5 h-5" />
					<h3 className="font-semibold">{goal.title}</h3>
				</div>
				<Progress value={goal.progress} className="mb-2" />
				<p className="text-sm text-gray-500">Deadline: {goal.deadline}</p>
			</div>
		))}
	</div>
);
