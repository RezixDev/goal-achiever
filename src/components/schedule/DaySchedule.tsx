"use client";

import React from "react";
import { Clock, Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useScheduleColors } from "@/hooks/useScheduleColors";
import { BreaksList } from "./BreaksList";
import { DayScheduleProps, DailyNutrition } from "./types";

export const DaySchedule: React.FC<DayScheduleProps> = ({
	selectedDay,
	schedule,
	breakActivities,
}) => {
	const { getActivityColor } = useScheduleColors();
	const [currentTime] = React.useState(new Date());

	const isActivityDone = (timeStr: string) => {
		const [startTime] = timeStr.split("-");
		const [hours, minutes] = startTime.split(":").map(Number);
		const activityTime = new Date();
		activityTime.setHours(hours, minutes, 0, 0);
		return currentTime > activityTime;
	};

	// Aktuelle Ernährungswerte für den Tag
	const dailyNutrition: DailyNutrition = {
		calories: 1500,
		protein: 110,
		carbs: 190,
		fats: 33,
		water: 900,
	};

	if (!selectedDay) {
		return (
			<div className="text-center text-gray-500 py-8">
				Wähle ein Datum im Kalender aus, um den Tagesplan zu sehen
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<Card>
				<CardHeader>
					<CardTitle className="text-xl font-bold flex items-center justify-between">
						<div className="flex items-center gap-2">
							<Clock className="w-5 h-5" />
							Tagesplan: {selectedDay}
						</div>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Tabs defaultValue="schedule">
						<TabsList>
							<TabsTrigger value="schedule">Zeitplan</TabsTrigger>
							<TabsTrigger value="breaks">Pausen</TabsTrigger>
						</TabsList>

						<TabsContent value="schedule">
							<div className="space-y-3">
								{schedule[selectedDay]?.map((item, index) => {
									const IconComponent = item.icon;
									const isDone = isActivityDone(item.time);

									return (
										<div
											key={index}
											className={`p-3 rounded border ${getActivityColor(
												item.type
											)} 
                        flex items-center space-x-3 ${
													isDone ? "opacity-50" : ""
												} 
                        ${item.variation ? "border-yellow-500 border-2" : ""}`}
										>
											<IconComponent className="w-5 h-5" />
											<Clock className="w-4 h-4" />
											<span className="font-medium">{item.time}</span>
											<span className="flex-1">{item.activity}</span>
											{isDone && <Check className="w-4 h-4 text-green-500" />}
											{item.variation && (
												<span className="text-xs text-yellow-600">
													Variiert
												</span>
											)}
										</div>
									);
								})}
							</div>
						</TabsContent>

						<TabsContent value="breaks">
							<BreaksList activities={breakActivities} />
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>

			{/* Ernährungszusammenfassung */}
			<Card>
				<CardHeader>
					<CardTitle className="text-lg font-bold">
						Ernährungszusammenfassung (Heute)
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
						<div className="text-center">
							<div className="text-2xl font-bold">
								{dailyNutrition.calories}
							</div>
							<div className="text-sm text-gray-500">kcal</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold">
								{dailyNutrition.protein}g
							</div>
							<div className="text-sm text-gray-500">Protein</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold">{dailyNutrition.carbs}g</div>
							<div className="text-sm text-gray-500">Kohlenhydrate</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold">{dailyNutrition.fats}g</div>
							<div className="text-sm text-gray-500">Fette</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold">{dailyNutrition.water}ml</div>
							<div className="text-sm text-gray-500">Wasser</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
