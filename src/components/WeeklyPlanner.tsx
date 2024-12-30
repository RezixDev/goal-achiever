// app/weekly-planner.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Progress } from "@/components/ui/progress";
import { Calendar as CalendarIcon, LayoutDashboard } from "lucide-react";
import { de } from "date-fns/locale";

// Components
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { WaterTracking } from "@/components/WaterTracking";
import { DaySchedule } from "@/components/schedule/DaySchedule";
import { GoalsList } from "@/components/goals/GoalsList";
import { ProjectsList } from "@/components/projects/ProjectsList";
import { WorkoutView } from "@/components/fitness/WorkoutView";
import { MealsList } from "@/components/nutrition/MealsList";

// Data
import {
	schedule,
	days,
	goals,
	breakActivities,
	sampleMeals,
	sampleWorkout,
	sampleProjects,
} from "./data";

export const WeeklyPlanner = () => {
	const [isClient, setIsClient] = useState(false);
	const [date, setDate] = useState<Date | undefined>(undefined);
	const [selectedDay, setSelectedDay] = useState<string | null>(null);

	// Initialisiere den State erst nach dem ersten Render
	useEffect(() => {
		setIsClient(true);
		const currentDate = new Date();
		setDate(currentDate);

		const dayIndex = currentDate.getDay();
		const adjustedIndex = dayIndex === 0 ? 6 : dayIndex - 1;
		setSelectedDay(days[adjustedIndex]);
	}, []);

	const handleDateSelect = (selectedDate: Date | undefined) => {
		if (!selectedDate) {
			const currentDate = new Date();
			setDate(currentDate);
			const dayIndex = currentDate.getDay();
			const adjustedIndex = dayIndex === 0 ? 6 : dayIndex - 1;
			setSelectedDay(days[adjustedIndex]);
			return;
		}

		setDate(selectedDate);
		const dayIndex = selectedDate.getDay();
		const adjustedIndex = dayIndex === 0 ? 6 : dayIndex - 1;
		setSelectedDay(days[adjustedIndex]);
	};

	// Zeige einen Ladezustand während der Client-Initialisierung
	if (!isClient) {
		return <div className="animate-pulse">Laden...</div>;
	}

	return (
		<div className="space-y-6">
			{/* Tracking Section */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<WaterTracking />
			</div>

			{/* Dashboard Section */}
			<Card>
				<CardHeader>
					<CardTitle className="text-xl font-bold flex items-center gap-2">
						<LayoutDashboard className="w-5 h-5" />
						Dashboard
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Tabs defaultValue="goals" className="w-full">
						<TabsList>
							<TabsTrigger value="goals">Ziele</TabsTrigger>
							<TabsTrigger value="projects">Projekte</TabsTrigger>
							<TabsTrigger value="nutrition">Ernährung</TabsTrigger>
							<TabsTrigger value="fitness">Fitness</TabsTrigger>
						</TabsList>

						<TabsContent value="goals">
							<GoalsList goals={goals} />
						</TabsContent>

						<TabsContent value="projects">
							<ProjectsList projects={sampleProjects} />
						</TabsContent>

						<TabsContent value="nutrition">
							<MealsList meals={sampleMeals} />
						</TabsContent>

						<TabsContent value="fitness">
							<WorkoutView workout={sampleWorkout} />
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>

			{/* Calendar and Schedule Section */}
			<div className="flex flex-col lg:flex-row gap-6">
				<Card className="lg:w-1/3">
					<CardHeader>
						<CardTitle className="text-xl font-bold flex items-center gap-2">
							<CalendarIcon className="w-5 h-5" />
							Kalender
						</CardTitle>
					</CardHeader>
					<CardContent>
						<Calendar
							mode="single"
							selected={date}
							onSelect={handleDateSelect}
							locale={de}
							className="rounded-md border"
						/>

						<div className="mt-4">
							<h3 className="font-semibold mb-2">Energielevel Tracking</h3>
							<div className="space-y-2">
								<div className="flex justify-between items-center">
									<span className="text-sm">Morgens</span>
									<Progress value={80} className="w-32" />
								</div>
								<div className="flex justify-between items-center">
									<span className="text-sm">Mittags</span>
									<Progress value={60} className="w-32" />
								</div>
								<div className="flex justify-between items-center">
									<span className="text-sm">Abends</span>
									<Progress value={40} className="w-32" />
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Day Schedule */}
				<div className="lg:w-2/3">
					<DaySchedule
						selectedDay={selectedDay}
						schedule={schedule}
						breakActivities={breakActivities}
					/>
				</div>
			</div>
		</div>
	);
};
