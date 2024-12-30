// contexts/BodyStatsContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface BodyStats {
	weight: number;
	height: number;
	age: number;
	gender: "male" | "female";
	activityLevel: "sedentary" | "light" | "moderate" | "very" | "extra";
	goal: "maintain" | "loss" | "gain";
}

interface Requirements {
	calories: number;
	protein: number;
	carbs: number;
	fats: number;
	water: number;
}

interface BodyStatsContextType {
	stats: BodyStats;
	requirements: Requirements;
	updateStats: (updates: Partial<BodyStats>) => void;
}

const defaultStats: BodyStats = {
	weight: 75,
	height: 175,
	age: 30,
	gender: "male",
	activityLevel: "moderate",
	goal: "maintain",
};

const BodyStatsContext = createContext<BodyStatsContextType | undefined>(
	undefined
);

export function BodyStatsProvider({ children }: { children: React.ReactNode }) {
	const [stats, setStats] = useState<BodyStats>(() => {
		if (typeof window !== "undefined") {
			const saved = localStorage.getItem("bodyStats");
			if (saved) {
				return JSON.parse(saved);
			}
		}
		return defaultStats;
	});

	useEffect(() => {
		localStorage.setItem("bodyStats", JSON.stringify(stats));
	}, [stats]);

	const calculateRequirements = (stats: BodyStats): Requirements => {
		// Grundumsatz (BMR) nach Harris-Benedict-Formel
		let bmr = 0;
		if (stats.gender === "male") {
			bmr = 66.47 + 13.7 * stats.weight + 5 * stats.height - 6.8 * stats.age;
		} else {
			bmr = 655.1 + 9.6 * stats.weight + 1.8 * stats.height - 4.7 * stats.age;
		}

		// Aktivitätsfaktor (PAL)
		const activityFactors = {
			sedentary: 1.2,
			light: 1.375,
			moderate: 1.55,
			very: 1.725,
			extra: 1.9,
		};

		let calories = bmr * activityFactors[stats.activityLevel];

		// Anpassung basierend auf Ziel
		switch (stats.goal) {
			case "loss":
				calories *= 0.8; // 20% Defizit
				break;
			case "gain":
				calories *= 1.2; // 20% Überschuss
				break;
		}

		return {
			calories: Math.round(calories),
			protein: Math.round(stats.weight * 2), // 2g pro kg Körpergewicht
			carbs: Math.round((calories * 0.5) / 4), // 50% der Kalorien aus Kohlenhydraten
			fats: Math.round((calories * 0.25) / 9), // 25% der Kalorien aus Fetten
			water: Math.round(stats.weight * 35), // 35ml pro kg Körpergewicht
		};
	};

	const requirements = calculateRequirements(stats);

	const updateStats = (updates: Partial<BodyStats>) => {
		setStats((prev) => ({ ...prev, ...updates }));
	};

	return (
		<BodyStatsContext.Provider value={{ stats, requirements, updateStats }}>
			{children}
		</BodyStatsContext.Provider>
	);
}

export const useBodyStats = () => {
	const context = useContext(BodyStatsContext);
	if (context === undefined) {
		throw new Error("useBodyStats must be used within a BodyStatsProvider");
	}
	return context;
};
