// components/BodyStats.tsx
"use client";

import React from "react";
import { useBodyStats } from "../contexts/BodyStatsContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Activity, Target } from "lucide-react";

interface BodyStatsType {
	weight: number;
	height: number;
	age: number;
	gender: "male" | "female";
	activityLevel: "sedentary" | "light" | "moderate" | "very" | "extra";
	goal: "maintain" | "loss" | "gain";
}

export const BodyStats: React.FC = () => {
	const { stats, updateStats } = useBodyStats();

	const handleStatsUpdate = (update: Partial<BodyStatsType>) => {
		updateStats(update);
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-xl font-bold flex items-center gap-2">
					<User className="w-5 h-5" />
					Körperparameter
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="space-y-2">
						<Label htmlFor="weight">Gewicht (kg)</Label>
						<Input
							id="weight"
							type="number"
							value={stats.weight}
							onChange={(e) =>
								handleStatsUpdate({ weight: Number(e.target.value) })
							}
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="height">Größe (cm)</Label>
						<Input
							id="height"
							type="number"
							value={stats.height}
							onChange={(e) =>
								handleStatsUpdate({ height: Number(e.target.value) })
							}
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="age">Alter</Label>
						<Input
							id="age"
							type="number"
							value={stats.age}
							onChange={(e) =>
								handleStatsUpdate({ age: Number(e.target.value) })
							}
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="gender">Geschlecht</Label>
						<Select
							value={stats.gender}
							onValueChange={(value: "male" | "female") =>
								handleStatsUpdate({ gender: value })
							}
						>
							<SelectTrigger>
								<SelectValue placeholder="Wähle Geschlecht" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="male">Männlich</SelectItem>
								<SelectItem value="female">Weiblich</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="space-y-2">
						<Label htmlFor="activityLevel" className="flex items-center gap-2">
							<Activity className="w-4 h-4" />
							Aktivitätslevel
						</Label>
						<Select
							value={stats.activityLevel}
							onValueChange={(value: BodyStatsType["activityLevel"]) =>
								handleStatsUpdate({ activityLevel: value })
							}
						>
							<SelectTrigger>
								<SelectValue placeholder="Wähle Aktivitätslevel" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="sedentary">
									Sitzend (wenig Bewegung)
								</SelectItem>
								<SelectItem value="light">
									Leicht aktiv (1-2x Training/Woche)
								</SelectItem>
								<SelectItem value="moderate">
									Moderat aktiv (3-5x Training/Woche)
								</SelectItem>
								<SelectItem value="very">
									Sehr aktiv (6-7x Training/Woche)
								</SelectItem>
								<SelectItem value="extra">
									Extrem aktiv (2x Training/Tag)
								</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="space-y-2">
						<Label htmlFor="goal" className="flex items-center gap-2">
							<Target className="w-4 h-4" />
							Ziel
						</Label>
						<Select
							value={stats.goal}
							onValueChange={(value: BodyStatsType["goal"]) =>
								handleStatsUpdate({ goal: value })
							}
						>
							<SelectTrigger>
								<SelectValue placeholder="Wähle dein Ziel" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="maintain">Gewicht halten</SelectItem>
								<SelectItem value="loss">Abnehmen</SelectItem>
								<SelectItem value="gain">Aufbauen</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
