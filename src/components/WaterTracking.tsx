"use client";

import React from "react";
import { useWaterTracking } from "@/hooks/useWaterTracking";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Droplets, Plus, Trash2 } from "lucide-react";

const WATER_AMOUNTS = [
	{ label: "200ml", value: 200 },
	{ label: "300ml", value: 300 },
	{ label: "500ml", value: 500 },
];

export const WaterTracking = () => {
	const {
		waterLog,
		summary,
		addWater,
		removeEntry,
		target,
		getNextRecommendation,
	} = useWaterTracking();

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-xl font-bold flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Droplets className="w-5 h-5" />
						Wasseraufnahme
					</div>
					<span className="text-sm font-normal text-gray-500">
						Ziel: {target}ml
					</span>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<div>
						<div className="flex justify-between mb-2">
							<span>Fortschritt</span>
							<span>
								{summary.total}ml / {target}ml
							</span>
						</div>
						<Progress value={summary.percentage} />
					</div>

					<div className="flex gap-2 justify-center">
						{WATER_AMOUNTS.map(({ label, value }) => (
							<Button
								key={value}
								variant="outline"
								onClick={() => addWater(value)}
								className="flex items-center gap-2"
							>
								<Plus className="w-4 h-4" />
								{label}
							</Button>
						))}
					</div>

					<div className="mt-4">
						<h4 className="font-medium mb-2">Protokoll:</h4>
						<div className="space-y-2 max-h-40 overflow-y-auto">
							{waterLog.map((entry, index) => (
								<div
									key={index}
									className="flex items-center justify-between text-sm p-2 bg-gray-50 rounded group"
								>
									<span>{entry.time}</span>
									<div className="flex items-center gap-2">
										<span>{entry.amount}ml</span>
										<button
											onClick={() => removeEntry(index)}
											className="opacity-0 group-hover:opacity-100 transition-opacity"
										>
											<Trash2 className="w-4 h-4 text-red-500 hover:text-red-700" />
										</button>
									</div>
								</div>
							))}
						</div>
					</div>

					{summary.remaining > 0 && (
						<div className="text-center text-sm text-gray-500">
							Noch {summary.remaining}ml bis zum Tagesziel
							{getNextRecommendation() > 0 && (
								<div className="mt-1">
									Empfehlung: Trinke jetzt {getNextRecommendation()}ml
								</div>
							)}
						</div>
					)}
				</div>
			</CardContent>
		</Card>
	);
};
