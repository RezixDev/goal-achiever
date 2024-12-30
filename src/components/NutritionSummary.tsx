// components/NutritionSummary.tsx
"use client";

import React from "react";
import { useBodyStats } from "../contexts/BodyStatsContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Apple, Beef, Wheat, Amphora, Droplets } from "lucide-react";

interface DailyNutrition {
	calories: number;
	protein: number;
	carbs: number;
	fats: number;
	water: number;
}

export const NutritionSummary = ({
	dailyNutrition,
}: {
	dailyNutrition: DailyNutrition;
}) => {
	const { requirements } = useBodyStats();

	const calculatePercentage = (current: number, target: number) => {
		return Math.min(Math.round((current / target) * 100), 100);
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-xl font-bold flex items-center gap-2">
					<Apple className="w-5 h-5" />
					Ernährungszusammenfassung
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<div className="space-y-2">
						<div className="flex items-center justify-between">
							<span className="flex items-center gap-2">
								<Apple className="w-4 h-4" />
								Kalorien
							</span>
							<span className="text-sm text-gray-500">
								{dailyNutrition.calories} / {requirements.calories} kcal
							</span>
						</div>
						<Progress
							value={calculatePercentage(
								dailyNutrition.calories,
								requirements.calories
							)}
						/>
					</div>

					<div className="space-y-2">
						<div className="flex items-center justify-between">
							<span className="flex items-center gap-2">
								<Beef className="w-4 h-4" />
								Protein
							</span>
							<span className="text-sm text-gray-500">
								{dailyNutrition.protein} / {requirements.protein}g
							</span>
						</div>
						<Progress
							value={calculatePercentage(
								dailyNutrition.protein,
								requirements.protein
							)}
						/>
					</div>

					<div className="space-y-2">
						<div className="flex items-center justify-between">
							<span className="flex items-center gap-2">
								<Wheat className="w-4 h-4" />
								Kohlenhydrate
							</span>
							<span className="text-sm text-gray-500">
								{dailyNutrition.carbs} / {requirements.carbs}g
							</span>
						</div>
						<Progress
							value={calculatePercentage(
								dailyNutrition.carbs,
								requirements.carbs
							)}
						/>
					</div>

					<div className="space-y-2">
						<div className="flex items-center justify-between">
							<span className="flex items-center gap-2">
								<Amphora className="w-4 h-4" />
								Fette
							</span>
							<span className="text-sm text-gray-500">
								{dailyNutrition.fats} / {requirements.fats}g
							</span>
						</div>
						<Progress
							value={calculatePercentage(
								dailyNutrition.fats,
								requirements.fats
							)}
						/>
					</div>

					<div className="space-y-2">
						<div className="flex items-center justify-between">
							<span className="flex items-center gap-2">
								<Droplets className="w-4 h-4" />
								Wasser
							</span>
							<span className="text-sm text-gray-500">
								{dailyNutrition.water} / {requirements.water}ml
							</span>
						</div>
						<Progress
							value={calculatePercentage(
								dailyNutrition.water,
								requirements.water
							)}
						/>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
