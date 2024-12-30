import React from "react";
import type { Meal } from "@/data/types";

interface MealsListProps {
	meals: Meal[];
}

export const MealsList: React.FC<MealsListProps> = ({ meals }) => (
	<div className="space-y-4">
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{meals.map((meal, index) => (
				<div key={index} className="p-4 border rounded-lg">
					<div className="flex items-center gap-2 mb-2">
						<meal.icon className="w-5 h-5" />
						<div>
							<h3 className="font-semibold">{meal.name}</h3>
							<p className="text-sm text-gray-500">
								{meal.time} - {meal.type}
							</p>
						</div>
					</div>
					<div className="text-sm space-y-1">
						<p>Kalorien: {meal.calories}</p>
						<p>Protein: {meal.protein}g</p>
						<p>Kohlenhydrate: {meal.carbs}g</p>
						<p>Fette: {meal.fats}g</p>
					</div>
				</div>
			))}
		</div>
	</div>
);
